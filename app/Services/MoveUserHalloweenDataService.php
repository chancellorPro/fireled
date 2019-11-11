<?php

namespace App\Services;

use App\Models\Cms\AppSettings;
use App\Models\Cms\Asset;
use App\Models\Cms\LinkedAsset;
use App\Models\Cms\Placement;
use App\Models\Stats\AssetsLog;
use App\Models\Stats\Pc1Migration;
use App\Models\Stats\RotationPoint;
use App\Models\User\LinkPc1;
use App\Models\User\User;
use App\Models\User\UserAsset;
use App\Models\User\UserNews;
use App\Models\User\UserPlacement;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Class MoveUserHalloweenDataService
 * Migrate data from PC1 to PC2
 */
class MoveUserHalloweenDataService
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:move-data {uid} {type}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Move user data from PC1 to PC2';

    private $debug = [];

    /**
     * Storage names
     */
    const STORAGE_NAMES = array(
        1  => "PC1 Apr 29",
        2  => "PC1 May 6",
        3  => "PC1 May 13",
        4  => "PC1 May 20",
        5  => "PC1 May 27",
        6  => "PC1 Jun 3",
        7  => "PC1 Jun 10",
        8  => "PC1 Jun 17",
        9  => "PC1 Jun 24",
        10 => "Halloween 2011",
        11 => "PC1 Generators",
        12 => "PC1 Misc",
    );

    /**
     * Closet names
     */
    const CLOSET_NAMES = array(
        1  => "PC1 Apr 29",
        2  => "PC1 May 6",
        3  => "PC1 May 13",
        4  => "PC1 May 20",
        5  => "PC1 May 27",
        6  => "PC1 Jun 3",
        7  => "PC1 Jun 10",
        8  => "PC1 Jun 17",
        9  => "PC1 Jun 24",
        10 => "PC1 Misc",
    );

    const COINS_LIMIT = 40000000;

    private $closets = [];
    private $storages = [];

    private $now = 0;

    private $userClosets = [];
    private $userStorages = [];

    const PACK_FOR_SAVE_ASSETS = 1000;
    private $assetsForAdd = [];
    private $assetsLog = [];
    private $placementsInc = [];

    private $user;
    private $userInstanceId;

    private $addedInstanceIds = [];
    private $assetLogTableName;

    private $uid = '947262772012607';
    private $type;
    private $env = 'dev';

    private $userConnection = "dev.user";
    private $cmsConnection = "dev.cms";
    private $statsConnection = "dev.stats";

    /**
     * MoveUserDataService constructor.
     */
    public function __construct($uid, $type, $env)
    {
        $this->uid = $uid;
        $this->type = $type;
        $this->now = Carbon::now();

        if (in_array($env, ['dev', 'stage', 'live'])) {
            $this->env = $env;
            $this->userConnection = $env . '.user';
            $this->cmsConnection = $env . '.cms';
            $this->statsConnection = $env . '.stats';
        }
    }

    /**
     * Execute command.
     *
     * @return mixed
     * @throws \App\Exceptions\ConfigServer\UrlNotFoundException
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function run()
    {
        /**
         * Get asset log table name
         */
        $this->assetLogTableName = RotationPoint::getRotationTableName('user_assets_log', $this->statsConnection);

        /**
         * User link
         */
        $userLink = LinkPc1::on($this->userConnection)->where('old_fb_id', $this->uid)->first();
        $userId = $userLink->user_id;
        $this->user = User::on($this->userConnection)->findOrFail($userId);

        /**
         * Log migration action
         */
        $logData = [
            'user_id' => $userId,
            'gc'      => 0,
            'coins'   => 0,
            'type'    => $this->type,
            'status'  => Pc1Migration::STATUS_START,
            'pid'     => getmypid(),
        ];
        $log = Pc1Migration::on($this->statsConnection)->create($logData);

        $start = microtime(true);

        /**
         * Data from pc1
         */
        $pc1UserDataResp = PC1apiService::sendToApi('get_user_move_halloween_assets', ['uid' => $this->uid, 'env' => $this->env]);

        printf("UID " . $this->uid . "\nGet data time: " . (microtime(true) - $start) . "\n");
        $this->debug[] = "UID " . $this->uid . "\nGet data time: " . (microtime(true) - $start) . "\n";

        if (!empty($pc1UserDataResp['data']['data']['packs'])) {
            $assetsPacks = $pc1UserDataResp['data']['data']['packs'];

            /**
             * Linked assets
             */
            $linkedAssets = Cache::remember('linkedAssets', 5, function() {
                return LinkedAsset::on($this->cmsConnection)
                    ->whereNotNull('asset_id')
                    ->join('assets', 'assets.id', '=', 'linked_assets.asset_id')
                    ->get()
                    ->keyBy('pc1_asset_id');
            });

            $totalAssets = 0;
            foreach ($assetsPacks as $assetsPack) {
                foreach ($assetsPack['assets'] as $instanceId => $pc1Asset) {
                    if (isset($linkedAssets[$pc1Asset])) {
                        $totalAssets++;
                    }
                }
            }

            DB::connection($this->userConnection)->beginTransaction();
            $this->user = User::on($this->userConnection)->findOrFail($userId);
            $this->userInstanceId = $this->user->last_instance_id;
            $this->user->update(['last_instance_id' => $this->userInstanceId + $totalAssets]);
            DB::connection($this->userConnection)->commit();

            /**
             * Log migration action
             */
            $logData = [
                'user_id' => $userId,
                'gc'      => 0,
                'coins'   => 0,
                'type'    => $this->type,
                'status'  => Pc1Migration::STATUS_CASH,
            ];
            $log->update($logData);

            /**
             * Get user and available storages and closets
             */
            $this->preparePlacements($userId);

            $assetTypeClothes = Asset::ASSET_TYPE_CLOTHES;
            foreach ($assetsPacks as $assetsPack) {
                $startPack = microtime(true);

                $packStorage = $assetsPack['storage'];
                $packCloset = $assetsPack['closet'];

                foreach ($assetsPack['assets'] as $instanceId => $pc1Asset) {

                    if (isset($linkedAssets[$pc1Asset])) {
                        $placementId = null;

                        /**
                         * Clothes
                         */
                        if ($linkedAssets[$pc1Asset]->type == $assetTypeClothes && $packCloset) {
                            $targetClosetName = self::CLOSET_NAMES[$packCloset] ?? '';
                            if ($targetClosetName) {
                                if (isset($this->userClosets[$targetClosetName])) {
                                    $placementId = $this->userClosets[$targetClosetName];
                                } else {
                                    $placementId = $this->addPlacement(
                                        $userId,
                                        'closet',
                                        $targetClosetName
                                    );
                                    $this->userClosets[$targetClosetName] = $placementId;
                                }
                            }

                            /**
                             * Furniture
                             */
                        } elseif ($packStorage) {
                            $targetStorageName = self::STORAGE_NAMES[$packStorage] ?? '';

                            if ($targetStorageName) {
                                if (isset($this->userStorages[$targetStorageName])) {
                                    $placementId = $this->userStorages[$targetStorageName];
                                } else {
                                    $placementId = $this->addPlacement(
                                        $userId,
                                        'storage',
                                        $targetStorageName
                                    );
                                    $this->userStorages[$targetStorageName] = $placementId;
                                }

                            }
                        }

                        if ($placementId) {
                            $this->addAsset($linkedAssets[$pc1Asset]->asset_id, $placementId);
                            $this->addedInstanceIds[] = $instanceId;
                        }
                    }

                }

//                printf("UID " . $this->uid . " Pack time: " . (microtime(true) - $startPack) . "\n");
                if ((microtime(true) - $startPack) > 1) {
                    $this->debug[] = "UID " . $this->uid . " Pack time: " . (microtime(true) - $startPack) . "\n";
                }
            }

//            $this->user->update(['last_instance_id' => $this->userInstanceId]);

            $this->saveAddedAssets();

            $logData = [
                'status' => Pc1Migration::STATUS_FINISH,
            ];
            $log->update($logData);

            /**
             * Val D'Souza PC2 ID
             */
            $senderId = 1;
            $attach = json_encode([
                [
                    't' => UserNews::TYPE_ANNOUNCEMENTS,
                    'i' => $senderId,
                    'd' => [
                        /**
                         * Val D'Souza FB ID
                         */
                        'fb' => 10156285577524285,
                        'fn' => 'Val',
                        'ln' => "D'Souza",
                    ],
                ]
            ]);
            $createdAt = date('Y-m-d H:i:s');
            $message = "The 2011 Halloween items from your PC1 account have been copied to PC2 to a sub storage called \"Halloween 2011\". If you had the Black Giant Spider and the Animated Skeleton in Rocking Chair items in your PC1 acct, they were also copied to your PC2 account to the same sub storage.";

//            /**
//             * Val D'Souza
//             */
//            UserNews::on($this->userConnection)->create([
//                'news_hash'       => md5($senderId . $userId . time()),
//                'user_id'         => $senderId,
//                'interlocutor_id' => $userId,
//                'direction'       => UserNews::DIRECTION_OUT,
//                'type'            => UserNews::TYPE_ANNOUNCEMENTS,
//                'status'          => UserNews::STATUS_NEW,
//                'message'         => $message,
//                'created_at'      => $createdAt,
//                'attachements'    => $attach,
//            ]);
//
//            /**
//             * User
//             */
//            UserNews::on($this->userConnection)->create([
//                'news_hash'       => md5($senderId . $userId . time()),
//                'user_id'         => $userId,
//                'interlocutor_id' => $senderId,
//                'direction'       => UserNews::DIRECTION_IN,
//                'type'            => UserNews::TYPE_ANNOUNCEMENTS,
//                'status'          => UserNews::STATUS_NEW,
//                'message'         => $message,
//                'created_at'      => $createdAt,
//                'attachements'    => $attach,
//            ]);

            (new ConfigServerService($this->env))->resetCache($this->user->id);

            $this->markUserAsMoved();
        }

        printf("UID " . $this->uid . " Execution time: " . (microtime(true) - $start) . "\n");
        foreach ($this->debug as $item) {
            printf($item);
        }
    }


    /**
     * Mark assets as moved in PC1
     *
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    private function markAsMoved()
    {
        $packs = array_chunk($this->addedInstanceIds, 500);
        foreach ($packs as $pack) {
            $resp = PC1apiService::sendToApi('mark_assets_as_moved', ['uid' => $this->uid, 'items' => $pack, 'env' => $this->env]);
        }
        $this->addedInstanceIds = [];
    }

    /**
     * Mark user as moved in PC1
     *
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    private function markUserAsMoved()
    {
        PC1apiService::sendToApi('mark_user_as_moved', ['uid' => $this->uid, 'env' => $this->env]);
    }

    /**
     * Add asset
     *
     * @param $assetId
     * @param $placementId
     */
    private function addAsset($assetId, $placementId)
    {
        $start = microtime(true);

//        $this->user->generateAssetInstanceId();
//        $instanceId = $this->user->last_instance_id;
        $this->userInstanceId++;
        $instanceId = $this->userInstanceId;

        if ((microtime(true)) - $start > 1) {
            $this->debug[] = "UID " . $this->uid . "  GenerateAssetInstanceId " . (microtime(true) - $start) . "\n";
        }

        $this->assetsForAdd[] = [
            'user_id'      => $this->user->id,
            'placement_id' => $placementId,
            'asset_id'     => $assetId,
            'instance_id'  => $instanceId,
            'created_at'   => $this->now,
            'updated_at'   => $this->now,
        ];

        $this->assetsLog[] = [
            'user_id'           => $this->user->id,
            'interlocutor_id'   => 0,
            'date'              => $this->now,
            'operation_type'    => AssetsLog::OPERATION_TYPE_FROM_CMS,
            'asset_id'          => $assetId,
            'asset_instance_id' => $instanceId,
            'placement_id'      => $placementId,
        ];

        if (isset($this->placementsInc[$placementId])) {
            $this->placementsInc[$placementId]++;
        } else {
            $this->placementsInc[$placementId] = 1;
        }

        if (count($this->assetsForAdd) > self::PACK_FOR_SAVE_ASSETS) {
            $this->saveAddedAssets();
        }

    }

    /**
     * Save Pack for added assets
     */
    private function saveAddedAssets()
    {
        if (!empty($this->assetsForAdd)) {
            $start = microtime(true);

            UserAsset::on($this->userConnection)->insert($this->assetsForAdd);
            DB::connection($this->statsConnection)->table($this->assetLogTableName)->insert($this->assetsLog);

            foreach ($this->placementsInc as $placementId => $inc) {
                UserPlacement::on($this->userConnection)->where([
                    'user_id'      => $this->user->id,
                    'placement_id' => $placementId,
                ])->increment('assets_count', $inc);
            }

            $this->markAsMoved();

            $this->assetsForAdd = [];
            $this->assetsLog = [];
            $this->placementsInc = [];

            if ((microtime(true)) - $start > 1) {
                $this->debug[] = "UID " . $this->uid . "  SaveAddedAssets " . (microtime(true) - $start) . "\n";
            }
        }
    }

    /**
     * Get new storage id
     *
     * @return mixed
     */
    private function getNewStorageId()
    {
        $placementsForOpen = array_diff($this->storages, array_values($this->userStorages));
        return array_shift($placementsForOpen);
    }

    /**
     * Get new closet id
     *
     * @return mixed
     */
    private function getNewClosetId()
    {
        $placementsForOpen = array_diff($this->closets, array_values($this->userClosets));
        return array_shift($placementsForOpen);
    }

    /**
     * Add placement
     *
     * @param int $userId User id
     * @param string $placementType Placement type
     * @param string $placementName Placement name
     *
     * @return int
     */
    private function addPlacement(int $userId, string $placementType, string $placementName = '')
    {

        if ($placementType == 'closet') {
            $placementId = $this->getNewClosetId();
        } else {
            $placementId = $this->getNewStorageId();
        }

        if ($placementId) {
            $row = [
                'user_id'      => $userId,
                'placement_id' => $placementId,
                'name'         => $placementName,
                'sort'         => $placementId,
                'created_at'   => Carbon::now(),
            ];

            UserPlacement::on($this->userConnection)->create($row);
        }

        return $placementId;
    }

    /**
     * Prepare placements
     *
     * @param $userId
     *
     * @return void
     */
    private function preparePlacements($userId)
    {
        $storageType = Placement::PLACEMENT_TYPE_STORAGE;
        $closetType = Placement::PLACEMENT_TYPE_CLOSET;

        /**
         * Get available storages and closets
         */
        $placements = Placement::on($this->cmsConnection)
            ->whereIn('type', [$storageType, $closetType])
            ->orderBy('id')
            ->get();

        foreach ($placements as $placement) {
            if ($placement->type == $storageType) {
                $this->storages[] = $placement->id;
            } else {
                $this->closets[] = $placement->id;
            }
        }

        /**
         * Get user storages and closets
         */
        $userPlacements = UserPlacement::on($this->userConnection)
            ->where('user_id', $userId)
            ->orderBy('placement_id')
            ->get();

        foreach ($userPlacements as $userPlacement) {
            $placementName = empty($userPlacement->name) ? $userPlacement->placement_id : $userPlacement->name;
            if (in_array($userPlacement->placement_id, $this->storages)) {
                if (isset($this->userStorages[$placementName])) {
                    $placementName .= uniqid();
                }
                $this->userStorages[$placementName] = $userPlacement->placement_id;
            } elseif (in_array($userPlacement->placement_id, $this->closets)) {
                if (isset($this->userClosets[$placementName])) {
                    $placementName .= uniqid();
                }
                $this->userClosets[$placementName] = $userPlacement->placement_id;
            }
        }
    }
}
