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
use App\Models\User\UserPlacement;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

/**
 * Class MoveUserDataService
 * Migrate data from PC1 to PC2
 */
class MoveUserDataServiceFix
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

    private $stepCounter = 1;

    /**
     * Storage names
     */
    const STORAGE_NAMES = array(
        1 => "PC1 Apr 29",
        2 => "PC1 May 6",
        3 => "PC1 May 13",
        4 => "PC1 May 20",
        5 => "PC1 May 27",
        6 => "PC1 Jun 3",
        7 => "PC1 Jun 10",
        8 => "PC1 Jun 17",
        9 => "PC1 Jun 24",
        10 =>"Halloween 2011",
        11 => "PC1 Generators",
        12 => "PC1 Misc",
    );

    /**
     * Closet names
     */
    const CLOSET_NAMES = array(
        1 => "PC1 Apr 29",
        2 => "PC1 May 6",
        3 => "PC1 May 13",
        4 => "PC1 May 20",
        5 => "PC1 May 27",
        6 => "PC1 Jun 3",
        7 => "PC1 Jun 10",
        8 => "PC1 Jun 17",
        9 => "PC1 Jun 24",
        10 => "PC1 Misc",
    );

    const COINS_LIMIT = 40000000;

    private $closets  = [];
    private $storages = [];

    private $now = 0;

    private $userClosets  = [];
    private $userStorages =[];

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

        if(in_array($env, ['dev', 'stage', 'live'])) {
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
//
//        $this->userInstanceId = $this->user->last_instance_id;

        /**
         * Log migration action
         */
        $logData = [
            'user_id' => $userId,
            'gc' => 0,
            'coins' => 0,
            'type' => $this->type,
            'status' =>Pc1Migration::STATUS_START,
            'pid' => getmypid(),
        ];
        $log = Pc1Migration::on($this->statsConnection)->create($logData);

        $start = microtime(true);

        /**
         * Data from pc1
         */
        $pc1UserDataResp = PC1apiService::sendToApi('get_user_move_assets', ['uid' => $this->uid, 'env' => $this->env]);

        printf("UID " . $this->uid . "\nGet data time: " . (microtime(true) - $start) . "\n");
        $this->debug[] = "UID " . $this->uid . "\nGet data time: " . (microtime(true) - $start) . "\n";

        if(!empty($pc1UserDataResp['data']['data']['packs'])) {
            $userInfo = $pc1UserDataResp['data']['data']['info'];
            $assetsPacks = $pc1UserDataResp['data']['data']['packs'];

            $nanny = (int)($pc1UserDataResp['data']['data']['nanny'] ?? 0);
            $roomExpands = (int)($userInfo['room_free_expands'] ?? 0);
            $roomBuys = (int)($userInfo['room_free_buys'] ?? 0);

            /**
             * Linked assets
             */
            $linkedAssets = Cache::remember('linkedAssets', 5, function () {
                return LinkedAsset::on($this->cmsConnection)
                    ->whereNotNull('asset_id')
                    ->join('assets', 'assets.id', '=', 'linked_assets.asset_id')
                    ->get()
                    ->keyBy('pc1_asset_id');
            });

            $totalAssets = 0;
            foreach ($assetsPacks as $assetsPack) {
                foreach ($assetsPack['assets'] as $instanceId => $pc1Asset) {
                    if(isset($linkedAssets[$pc1Asset])) {
                        $totalAssets++;
                    }
                }
            }

            DB::connection($this->userConnection)->beginTransaction();
                $this->user = User::on($this->userConnection)->findOrFail($userId);
                $this->userInstanceId = $this->user->last_instance_id;
                $this->user->update(['last_instance_id' => $this->userInstanceId + $totalAssets + $nanny + $roomExpands + $roomBuys]);
            DB::connection($this->userConnection)->commit();

            /**
             * GC and Coins migration
             */
            $prevAttempt = Pc1Migration::on($this->statsConnection)
                ->where('user_id', $userId)
//                ->where('status', Pc1Migration::STATUS_FINISH)
                ->select(DB::raw('sum(gc) as gc_sum, 
                        sum(coins) as coins_sum, 
                        sum(nanny) as nanny_sum,
                        sum(room_buys) as room_buys_sum,
                        sum(room_expands) as room_expands_sum'))
                ->first();

            $movedCash  = (int)$prevAttempt->gc_sum;
            $movedCoins = (int)$prevAttempt->coins_sum;
            $movedNanny = (int)$prevAttempt->nanny_sum;
            $movedRoomBuys = (int)$prevAttempt->room_buys_sum;
            $movedRoomExpands = (int)$prevAttempt->room_expands_sum;

            $nanny -= $movedNanny;
            $roomExpands -= $movedRoomExpands;
            $roomBuys -= $movedRoomBuys;

            $userCoins = (int)$userInfo['coins'] > self::COINS_LIMIT ? self::COINS_LIMIT : (int)$userInfo['coins'];
            $addCash   = (int)$userInfo['cash'] - $movedCash;
            $addCoins  = $userCoins - $movedCoins;

            if($addCash > 0) {
                $this->user->increment('cash', $addCash);
            }
            if($addCoins > 0 ) {
                $this->user->increment('coins', $addCoins);
            }

            /**
             * Log migration action
             */
            $logData = [
                'user_id' => $userId,
                'gc'      => ($addCash > 0 ? $addCash : 0),
                'coins'   => ($addCoins > 0 ? $addCoins : 0),
                'type'    => $this->type,
                'status'  => Pc1Migration::STATUS_CASH,
            ];
            $log->update($logData);

            /**
             * Get user and available storages and closets
             */
            $this->preparePlacements($userId);


            $certConfig = AppSettings::getConfig('pc1_migration_assets', $this->env);
            $nannyAssetId = $certConfig['rows'][0]['nanny'] ?? 0;
            $roomBuysAssetId = $certConfig['rows'][0]['room_buys'] ?? 0;
            $roomExpandsAssetId = $certConfig['rows'][0]['room_expands'] ?? 0;



            /**
             * Certificates
             * Rooms
             */
            $roomExpandsAdded = 0;
            $roomBuysAdded    = 0;
            if(($roomExpands > 0 && $roomExpandsAssetId) || ($roomBuys > 0 && $roomBuysAssetId)) {
                $targetStorageName = self::STORAGE_NAMES[12] ?? '';
                if(isset($this->userStorages[$targetStorageName])) {
                    $placementId = $this->userStorages[$targetStorageName];
                } else {
                    $placementId = $this->addPlacement(
                        $userId,
                        'storage',
                        $targetStorageName
                    );
                    $this->userStorages[$targetStorageName] = $placementId;
                }
                if($roomExpandsAssetId) {
                    for ($i=0; $i < $roomExpands; $i++) {
                        $this->addAsset($roomExpandsAssetId, $placementId);
                        $roomExpandsAdded++;
                    }
                }
                if($roomBuysAssetId) {
                    for ($i = 0; $i < $roomBuys; $i++) {
                        $this->addAsset($roomBuysAssetId, $placementId);
                        $roomBuysAdded++;
                    }
                }
            }

            /**
             * Certificates
             * Nanny
             */
            $nannyAdded = 0;
            if($nanny > 0 && $nannyAssetId) {
                $targetStorageName = self::STORAGE_NAMES[11] ?? '';
                if(isset($this->userStorages[$targetStorageName])) {
                    $placementId = $this->userStorages[$targetStorageName];
                } else {
                    $placementId = $this->addPlacement(
                        $userId,
                        'storage',
                        $targetStorageName
                    );
                    $this->userStorages[$targetStorageName] = $placementId;
                }

                for ($i=0; $i < $nanny; $i++) {
                    $this->addAsset($nannyAssetId, $placementId);
                    $nannyAdded++;
                }
            }

            /**
             * Log migration action
             */
            $logData = [
                'status'  => Pc1Migration::STATUS_ASSETS,
                'nanny' => $nannyAdded,
                'room_buys' => $roomBuysAdded,
                'room_expands' => $roomExpandsAdded,
            ];
            $log->update($logData);

            $assetTypeClothes = Asset::ASSET_TYPE_CLOTHES;
            foreach ($assetsPacks as $assetsPack) {
                $startPack = microtime(true);

                $packStorage = $assetsPack['storage'];
                $packCloset = $assetsPack['closet'];

                foreach ($assetsPack['assets'] as $instanceId => $pc1Asset) {

                    if(isset($linkedAssets[$pc1Asset])) {
                        $placementId = null;

                        /**
                         * Clothes
                         */
                        if($linkedAssets[$pc1Asset]->type == $assetTypeClothes && $packCloset) {
                            $targetClosetName = self::CLOSET_NAMES[$packCloset] ?? '';
                            if($targetClosetName) {
                                if(isset($this->userClosets[$targetClosetName])) {
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
                        } elseif($packStorage) {
                            $targetStorageName = self::STORAGE_NAMES[$packStorage] ?? '';

                            if($targetStorageName) {
                                if(isset($this->userStorages[$targetStorageName])) {
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

                        if($placementId) {
                            $this->addAsset($linkedAssets[$pc1Asset]->asset_id, $placementId);
                            $this->addedInstanceIds[] = $instanceId;
                        }
                    }

                }

//                printf("UID " . $this->uid . " Pack time: " . (microtime(true) - $startPack) . "\n");
                if((microtime(true) - $startPack) > 1) {
                    $this->debug[] = "UID " . $this->uid . " Pack time: " . (microtime(true) - $startPack) . "\n";
                }
            }

//            $this->user->update(['last_instance_id' => $this->userInstanceId]);

            $this->saveAddedAssets();

            $logData = [
                'status'  => Pc1Migration::STATUS_FINISH,
            ];
            $log->update($logData);
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
    private function markAsMoved() {
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
    private function markUserAsMoved() {
        PC1apiService::sendToApi('mark_user_as_moved', ['uid' => $this->uid, 'env' => $this->env]);
    }

    /**
     * Add asset
     *
     * @param $assetId
     * @param $placementId
     */
    private function addAsset($assetId, $placementId) {
        $start = microtime(true);

//        $this->user->generateAssetInstanceId();
//        $instanceId = $this->user->last_instance_id;
        $this->userInstanceId ++;
        $instanceId = $this->userInstanceId;

        if((microtime(true)) - $start > 1) {
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
            'placement_id' => $placementId,
        ];

        if(isset($this->placementsInc[$placementId])) {
            $this->placementsInc[$placementId]++;
        } else {
            $this->placementsInc[$placementId] = 1;
        }



        if(count($this->assetsForAdd) > self::PACK_FOR_SAVE_ASSETS) {

            printf("UID " . $this->uid . "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! assets: " . count($this->assetsForAdd) . "\n");

            $this->saveAddedAssets();

            $this->stepCounter++;
        }

    }

    /**
     * Save Pack for added assets
     */
    private function saveAddedAssets() {
        if(!empty($this->assetsForAdd)) {
            $start = microtime(true);

            if ($this->stepCounter > 1) {
                UserAsset::on($this->userConnection)->insert($this->assetsForAdd);
            }

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
            $this->placementsInc =[];

            if((microtime(true)) - $start > 1) {
                $this->debug[] = "UID " . $this->uid . "  SaveAddedAssets " . (microtime(true) - $start) . "\n";
            }
        }
    }

    /**
     * Get new storage id
     *
     * @return mixed
     */
    private function getNewStorageId() {
        $placementsForOpen = array_diff($this->storages, array_values($this->userStorages));
        return array_shift($placementsForOpen);
    }

    /**
     * Get new closet id
     *
     * @return mixed
     */
    private function getNewClosetId() {
        $placementsForOpen = array_diff($this->closets, array_values($this->userClosets));
        return array_shift($placementsForOpen);
    }

    /**
     * Add placement
     *
     * @param int    $userId User id
     * @param string $placementType Placement type
     * @param string $placementName Placement name
     *
     * @return int
     */
    private function addPlacement(int $userId, string $placementType, string $placementName = '') {

        if($placementType == 'closet') {
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
    private function preparePlacements($userId) {
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
            if($placement->type == $storageType) {
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
            if(in_array($userPlacement->placement_id, $this->storages)){
                if(isset($this->userStorages[$placementName])) {
                    $placementName .= uniqid();
                }
                $this->userStorages[$placementName] = $userPlacement->placement_id;
            } elseif(in_array($userPlacement->placement_id, $this->closets)){
                if(isset($this->userClosets[$placementName])){
                    $placementName .= uniqid();
                }
                $this->userClosets[$placementName] = $userPlacement->placement_id;
            }
        }
    }
}
