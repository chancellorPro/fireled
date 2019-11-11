<?php

namespace App\Services\AssetConfigDependency;

use App\Models\Cms\Announcements;
use App\Models\Cms\AppSettings;
use App\Models\Cms\AssetGiftWrap;
use App\Models\Cms\Crop;
use App\Models\Cms\MakeupKit;
use App\Models\Cms\Meal;
use App\Models\Cms\NeighborActivity;
use App\Models\Cms\Product;
use App\Models\Cms\Tamatool;
use App\Services\AssetAwardDependency;
use App\Services\AssetConfigDependency\Configs\AppSettingWithDateConfig;
use App\Services\AssetConfigDependency\Configs\BaseConfig;
use App\Services\AssetConfigDependency\Configs\CollectionsConfig;
use App\Services\AssetConfigDependency\Configs\DailyAssetsConfig;
use App\Services\AssetConfigDependency\Configs\DPAConfig;
use App\Services\AssetConfigDependency\Configs\InitialUser;
use App\Models\Cms\MealIngredients;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

/**
 * Class AssetConfigDependency
 */
class AssetConfigDependency
{
    /**
     * Max dependency level
     */
    const MAX_DEPENDENCY_LEVEL = 7;

    /**
     * Env
     *
     * @var string|null
     */
    protected $env;

    /**
     * DB
     *
     * @var \Illuminate\Database\ConnectionInterface
     */
    protected $db;

    /**
     * Asset ids in config
     * @var array
     */
    protected $assetsIds = [];
    /**
     * Award ids in config
     * @var array
     */
    protected $awardIds = [];

    /**
     * Time restricted assets
     * @var array
     */
    protected $timeRestrictedAssets = [];

    private $customConfigs = [
        CollectionsConfig::class,
        DPAConfig::class,
        Product::class,
        DailyAssetsConfig::class,
        Meal::class,
        MealIngredients::class,
        NeighborActivity::class,
        Tamatool::class,
        MakeupKit::class,
        AssetGiftWrap::class,
        Crop::class,
        Announcements::class
    ];

    private $baseConfigs = [
        'initial_user',
        'levels',
        'room_default_assets',
        'neighbor_bonus',
        'week_daily_loot',
        'cheater_week_daily_loot',
        'default_pet_assets',
        'single_room_default_assets',
        'misc',
        'link_account_bonus',
        'refunds',
        'state_limits',
//        'shop_admin_default_assets'
    ];

    /**
     * AssetAwardDependency constructor.
     *
     * @param string|null $env Env
     */
    public function __construct(?string $env = null)
    {
        $this->env = $env ?? environment();
    }


    /**
     * Get time restricted assets
     *
     * @return array
     */
    public function getTimeRestrictedAssets() {
        return $this->timeRestrictedAssets;
    }

    /**
     * Get config assets
     *
     * @return Collection
     */
    public function getConfigAssets() {
        $assets = collect([]);

        $assetAwardDependency = new AssetAwardDependency();

        foreach ($this->baseConfigs as $config) {
            $configAssets = collect([]);
            $baseConfig = new BaseConfig($config);
            $configData = $baseConfig->getAssetsAndAwards();

            $assetsIds = collect($configData['assets']);
            $awardIds = collect($configData['awards']);

            $configAssets = $configAssets->merge($assetsIds);

            $dependentAssets = $assetAwardDependency->getDependentAssets($assetsIds, $config);

            $configAssets = $configAssets->merge($dependentAssets);

            $dependentAwardAssets = $assetAwardDependency->getAwardDependentAssets($awardIds, $config);

            $configAssets = $configAssets->merge($dependentAwardAssets);

            $assets = $assets->merge($configAssets);
        }

        foreach ($this->customConfigs as $config) {

            $customConfig = new $config;
            $configData = $customConfig->getAssetsAndAwards();

            if (is_callable(array($customConfig, 'getTable'))) {
                $customConfigName = $customConfig->getTable();
            } else {
                $customConfigName = $customConfig->getConfigName();
            }

            $assetsIds = collect($configData['assets']);
            $awardIds = collect($configData['awards']);

            $assets = $assets->merge($assetsIds);

            $dependentAssets = $assetAwardDependency->getDependentAssets($assetsIds, $customConfigName);

            $assets = $assets->merge($dependentAssets);

            $dependentAwardAssets = $assetAwardDependency->getAwardDependentAssets($awardIds, $customConfigName);

            $assets = $assets->merge($dependentAwardAssets);

            /**
             * Find time restricted assets
             */
            foreach ($configData['timeRestrictedAwards'] as $awardId => $timeRestriction) {
                $dependentAwardAssets = $assetAwardDependency->getAwardDependentAssets(collect([$awardId]), $customConfigName);

                foreach ($dependentAwardAssets as $dependentAwardAsset) {
                    /**
                     * Take earliest start and latest finish
                     */
                    $prevDeadlines = $this->timeRestrictedAssets[$dependentAwardAsset] ?? null;
                    $start = $timeRestriction['start'];
                    $finish = $timeRestriction['finish'];
                    $maxDeadlines = getMaxDeadlines($start, $finish,  $prevDeadlines);

                    $this->timeRestrictedAssets[$dependentAwardAsset] = $maxDeadlines;
                }
            }

            foreach ($configData['timeRestrictedAssets'] as $assetId => $timeRestriction) {
                /**
                 * Take earliest start and latest finish
                 */
                $prevDeadlines = $this->timeRestrictedAssets[$assetId] ?? null;
                $start = $timeRestriction['start'];
                $finish = $timeRestriction['finish'];
                $maxDeadlines = getMaxDeadlines($start, $finish,  $prevDeadlines);
                $this->timeRestrictedAssets[$assetId] = $maxDeadlines;

                $dependentAssets = $assetAwardDependency->getDependentAssets(collect([$assetId]), $customConfigName);

                foreach ($dependentAssets as $dependentAsset) {
                    /**
                     * Take earliest start and latest finish
                     */
                    $prevDeadlines = $this->timeRestrictedAssets[$dependentAsset] ?? null;
                    $maxDeadlines = getMaxDeadlines($start, $finish,  $prevDeadlines);

                    $this->timeRestrictedAssets[$dependentAsset] = $maxDeadlines;
                }
            }
        }
        /**
         * Time restricted assets from random awards
         */
        $this->timeRestrictedAssets +=  $assetAwardDependency->getTimeRestrictedAssets();

        $assetAwardDependency->saveChains();

        return $assets;
    }
}
