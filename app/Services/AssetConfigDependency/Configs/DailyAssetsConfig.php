<?php
namespace App\Services\AssetConfigDependency\Configs;

use App\Models\Cms\AppSettings;

/**
 * Class DailyAssetsConfig
 * @package App\Services\AssetConfigDependency\Configs
 */
class DailyAssetsConfig
{
    /**
     * @var Asset ids in config
     */
    protected $timeRestrictedAssets = [];

    /**
     * Get assets and awards
     *
     * @return array
     */
    public function getAssetsAndAwards() {
        $appSettings = AppSettings::getConfig('custom_date_daily_loot');
        $rows = $appSettings['rows'] ?? [];
        $this->fillData($rows);

        $appSettings = AppSettings::getConfig('cheater_custom_date_daily_loot');
        $rows = $appSettings['rows'] ?? [];
        $this->fillData($rows);

        return [
            'awards' => [],
            'assets' => [],
            'timeRestrictedAssets' => $this->timeRestrictedAssets,
            'timeRestrictedAwards' => [],
        ];
    }

    public function getConfigName() {
        return 'custom_date_daily_loot';
    }


    /**
     * Fill data
     *
     * @param array $rows
     */
    private function fillData(array $rows) {
        foreach ($rows as $row) {
            if (!empty($row['date']) && !empty($row['embed_box'])) {
                foreach ($row['embed_box'] as $embedBox) {
                    $this->timeRestrictedAssets[$embedBox['asset_id']] = [
                        'start' => $row['date'] . ' 00:00:00',
                        'finish' => $row['date'] . ' 23:59:59',
                    ];
                }
            }
        }
    }
}