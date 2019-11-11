<?php

namespace App\Services\ConfigGenerator;

use App\Models\Cms\ApiConfig;
use App\Models\Cms\AppConfig;
use App\Models\Cms\ConfigVersion;
use App\Models\CmsModel;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;
use App\Services\ConfigGenerator\Deployers\ClientDeployer;
use App\Services\ConfigGenerator\Deployers\ServerDeployer;
use App\Services\ConfigGenerator\Generators\ActionTypes;
use App\Services\ConfigGenerator\Generators\AiAnimation;
use App\Services\ConfigGenerator\Generators\AiBehaviour;
use App\Services\ConfigGenerator\Generators\AnnouncementsServer;
use App\Services\ConfigGenerator\Generators\Asset\AssetsBanner;
use App\Services\ConfigGenerator\Generators\Asset\AssetsBodyPart;
use App\Services\ConfigGenerator\Generators\Asset\AssetsClothes;
use App\Services\ConfigGenerator\Generators\Asset\AssetsCollection;
use App\Services\ConfigGenerator\Generators\Asset\AssetsCrop;
use App\Services\ConfigGenerator\Generators\Asset\AssetsFoodItem;
use App\Services\ConfigGenerator\Generators\Asset\AssetsFurniture;
use App\Services\ConfigGenerator\Generators\Asset\AssetsLinked;
use App\Services\ConfigGenerator\Generators\Asset\AssetsMeal;
use App\Services\ConfigGenerator\Generators\AssetLimits;
use App\Services\ConfigGenerator\Generators\AssetSoundClient;
use App\Services\ConfigGenerator\Generators\Awards;
use App\Services\ConfigGenerator\Generators\BodyParts;
use App\Services\ConfigGenerator\Generators\BottleDye;
use App\Services\ConfigGenerator\Generators\CollectionsClient;
use App\Services\ConfigGenerator\Generators\CollectionsServer;
use App\Services\ConfigGenerator\Generators\CommonSoundClient;
use App\Services\ConfigGenerator\Generators\Crops;
use App\Services\ConfigGenerator\Generators\DailyLootServer;
use App\Services\ConfigGenerator\Generators\DefaultPetAppearanceClient;
use App\Services\ConfigGenerator\Generators\DefaultPetAssets;
use App\Services\ConfigGenerator\Generators\DyeClient;
use App\Services\ConfigGenerator\Generators\GiftWraps;
use App\Services\ConfigGenerator\Generators\InitialUser;
use App\Services\ConfigGenerator\Generators\Levels;
use App\Services\ConfigGenerator\Generators\LocalizationEN;
use App\Services\ConfigGenerator\Generators\MagicServer;
use App\Services\ConfigGenerator\Generators\Maintenance;
use App\Services\ConfigGenerator\Generators\MakeupKits;
use App\Services\ConfigGenerator\Generators\Meal;
use App\Services\ConfigGenerator\Generators\MealIngredientGroup;
use App\Services\ConfigGenerator\Generators\MealIngredientLimit;
use App\Services\ConfigGenerator\Generators\MealIngredients;
use App\Services\ConfigGenerator\Generators\Misc;
use App\Services\ConfigGenerator\Generators\NeighborActivityClient;
use App\Services\ConfigGenerator\Generators\NeighborActivityServer;
use App\Services\ConfigGenerator\Generators\NeighborBonusServer;
use App\Services\ConfigGenerator\Generators\NonXpAssets;
use App\Services\ConfigGenerator\Generators\Placement\PlacementClosets;
use App\Services\ConfigGenerator\Generators\Placement\PlacementHidden;
use App\Services\ConfigGenerator\Generators\Placement\PlacementPets;
use App\Services\ConfigGenerator\Generators\Placement\PlacementRooms;
use App\Services\ConfigGenerator\Generators\Placement\PlacementStorages;
use App\Services\ConfigGenerator\Generators\Placement\PlacementLimits;
use App\Services\ConfigGenerator\Generators\Placement\PlacementStylist;
use App\Services\ConfigGenerator\Generators\ProductsClient;
use App\Services\ConfigGenerator\Generators\ProductsFacebook;
use App\Services\ConfigGenerator\Generators\ProductsServer;
use App\Services\ConfigGenerator\Generators\RandomAwardsClient;
use App\Services\ConfigGenerator\Generators\RandomAwardsServer;
use App\Services\ConfigGenerator\Generators\RandomPetNames;
use App\Services\ConfigGenerator\Generators\Refunds;
use App\Services\ConfigGenerator\Generators\Resources;
use App\Services\ConfigGenerator\Generators\RoomDefaultAssets;
use App\Services\ConfigGenerator\Generators\ShopDepartments;
use App\Services\ConfigGenerator\Generators\ShopItems;
use App\Services\ConfigGenerator\Generators\Shops;
use App\Services\ConfigGenerator\Generators\StateLimits;
use App\Services\ConfigGenerator\Generators\SubTypes;
use App\Services\ConfigGenerator\Generators\Tamatool;
use App\Services\ConfigGenerator\Generators\LinkAccountBonus;
use App\Events\ConfigDeployed;
use App\Services\ConfigGenerator\Generators\UserNpc;
use Carbon\Carbon;
use DB;

/**
 * Class Kernel
 */
final class Kernel
{

    /**
     * List key
     */
    const LIST_KEY = 'list';

    /**
     * Client generators
     *
     * @var array
     */
    private $commonGenerators = [
        'actionTypes'          => ActionTypes::class,
        'assetsBanner'         => AssetsBanner::class,
        'assetsBodyPart'       => AssetsBodyPart::class,
        'assetsClothes'        => AssetsClothes::class,
        'assetsFurniture'      => AssetsFurniture::class,
        'assetsLinked'         => AssetsLinked::class,
        'assetsCollection'     => AssetsCollection::class,
        'assetsFoodItem'       => AssetsFoodItem::class,
        'assetsMeal'           => AssetsMeal::class,
        'assetCrop'            => AssetsCrop::class,
        'awards'               => Awards::class,
        'hiddenStorages'       => PlacementHidden::class,
        'initialUser'          => InitialUser::class,
        'levels'               => Levels::class,
        'nonXpAssets'          => NonXpAssets::class,
        'pets'                 => PlacementPets::class,
        'resources'            => Resources::class,
        'roomDefaultAssets'    => RoomDefaultAssets::class,
        'shopItems'            => ShopItems::class,
        'shops'                => Shops::class,
        'stylists'             => PlacementStylist::class,
        'makeupKit'            => MakeupKits::class,
        'tamatool'             => Tamatool::class,
        'mealIngredientGroups' => MealIngredientGroup::class,
        'mealIngredientLimits' => MealIngredientLimit::class,
        'mealIngredients'      => MealIngredients::class,
        'meal'                 => Meal::class,
        'linkAccountBonus'     => LinkAccountBonus::class,
        'closets'              => PlacementClosets::class,
        'storages'             => PlacementStorages::class,
        'rooms'                => PlacementRooms::class,
        'assetLimits'          => AssetLimits::class,
        'stateLimits'          => StateLimits::class,
        'misc'                 => Misc::class,
        'crops'                => Crops::class,
        'bottleDye'            => BottleDye::class,
    ];

    /**
     * Client generators
     *
     * @var array
     */
    private $clientGenerators = [
        'aiAnimation'            => AiAnimation::class,
        'aiBehaviour'            => AiBehaviour::class,
        'assetsAttributePattern' => SubTypes::class,
        'bodyParts'              => BodyParts::class,
        'localizationEn'         => LocalizationEN::class,
        'neighborActivity'       => NeighborActivityClient::class,
        'products'               => ProductsClient::class,
        'randomPetNames'         => RandomPetNames::class,
        'shopDepartments'        => ShopDepartments::class,
        'collections'            => CollectionsClient::class,
        'randomAwards'           => RandomAwardsClient::class,
        'dpa'                    => DefaultPetAppearanceClient::class,
        'giftWraps'              => GiftWraps::class,
        'dyeConfig'              => DyeClient::class,
        'assetSound'             => AssetSoundClient::class,
        'commonSound'            => CommonSoundClient::class,
        'placementLimits'        => PlacementLimits::class,
    ];

    /**
     * Server generators
     *
     * @var array
     */
    private $serverGenerators = [
        'neighborActivity' => NeighborActivityServer::class,
        'neighborBonus'    => NeighborBonusServer::class,
        'products'         => ProductsServer::class,
        'collections'      => CollectionsServer::class,
        'randomAwards'     => RandomAwardsServer::class,
        'magic'            => MagicServer::class,
        'announcements'    => AnnouncementsServer::class,
        'product_facebook' => ProductsFacebook::class,
        'daily_loot'       => DailyLootServer::class,
        'maintenance'      => Maintenance::class,
        'refunds'          => Refunds::class,
        'defaultPetAssets' => DefaultPetAssets::class,
        'npc'              => UserNpc::class
    ];

    /**
     * Run the deploy
     *
     * @return void
     */
    public function run()
    {
        try {
            DB::connection(CmsModel::connection())
                ->transaction(function () {

                $configVersion = new ConfigVersion;
                $configVersion->save();

                /**
                 * Client
                 */
                $clientList = $this->commonGenerators + $this->clientGenerators;
                $this->handler($clientList, new ClientDeployer($configVersion->id));

                /**
                 * Server
                 */
                $serverList = $this->commonGenerators + $this->serverGenerators;
                $this->handler($serverList, new ServerDeployer($configVersion->id));

                /**
                 * Delete old configs
                 */
                $this->deleteOldConfigs();
            });

            GenerationProcess::completed();

            event(new ConfigDeployed(environment()));
        } catch (\Exception $e) {
            GenerationProcess::fail($e);
        }
    }

    /**
     * Update singe configs without new version
     *
     * @param array  $list               List of deployers
     * @param string $type               Config types
     * @param bool   $configServerUpdate Will Config server update
     *
     * @return void
     */
    public function update($list, $type = 'server', $configServerUpdate = true)
    {
        $configVersion = ConfigVersion::orderBy('id', 'desc')->first();

        if($list) {
            if($type == 'server') {
                $deployer = new ServerDeployer($configVersion->id);
            } else {
                $deployer = new ClientDeployer($configVersion->id);
            }

            foreach ($list as $key => $generator) {
                $this->callGenerator($deployer, new $generator);
            }
        }

        if ($configServerUpdate) {
            event(new ConfigDeployed(environment()));
        }
    }

    /**
     * Call each generator in the list
     *
     * @param array    $listGenerators List with generators
     * @param Deployer $deployer       Deployer
     *
     * @return void
     */
    private function handler(array $listGenerators, Deployer $deployer)
    {
        $list = [];

        foreach ($listGenerators as $key => $generator) {
            $time = microtime(true);

            $list[$key] = $this->callGenerator($deployer, new $generator);

            $resultTime = microtime(true) - $time;
            $logMessage = sprintf("%6.02f - %s\n", $resultTime, $key);

            GenerationProcess::put($logMessage);
        }

        $deployer->deployList(self::LIST_KEY, $list);
    }

    /**
     * Call generator
     *
     * @param Deployer  $deployer  Deployer
     * @param Generator $generator Generator
     *
     * @return mixed
     */
    private function callGenerator(Deployer $deployer, Generator $generator)
    {
        return $generator->generate($deployer);
    }

    /**
     * Delete old configs
     */
    private function deleteOldConfigs()
    {
        $recordsToSkip  = 10;
        $expirationDays = 14;

        /**
         * Skip last {$recordsToSkip} records
         */
        $versionsToSkip = ConfigVersion::orderBy('updated_at', 'desc')
            ->limit($recordsToSkip)
            ->get(['id'])
            ->pluck('id')
            ->toArray();

        /**
         * Linked versions
         */
        $versionsToSkip = array_merge(ApiConfig::whereRaw("config_version_id IS NOT NULL")
            ->get(['config_version_id'])
            ->pluck('config_version_id')
            ->toArray(),
            $versionsToSkip
        );

        /**
         * Expiration date
         */
        $expirationDate = Carbon::now()
            ->subDay($expirationDays)
            ->format('Y-m-d');

        /**
         * Delete AppConfigs
         */
        AppConfig::where(function ($query) use ($versionsToSkip) {
            $query
                ->whereNotIn('version', $versionsToSkip)
                ->orWhereRaw('version IS NULL');
        })
            ->whereRaw("DATE(updated_at) < ?", $expirationDate)
            ->delete();

        /**
         * Delete Config versions
         */
        ConfigVersion::whereNotIn('id', $versionsToSkip)
            ->whereRaw("DATE(updated_at) < ?", $expirationDate)
            ->delete();
    }
}
