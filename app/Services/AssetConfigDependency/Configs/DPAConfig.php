<?php
namespace App\Services\AssetConfigDependency\Configs;

use App\Models\Cms\AppSettings;

/**
 * Class DPAConfig
 * @package App\Services\AssetConfigDependency\Configs
 */
class DPAConfig
{
    /**
     * @var Asset ids in config
     */
    protected $assets = [];

    /**
     * Get assets and awards
     *
     * @return array
     */
    public function getAssetsAndAwards() {
        $appSettings = AppSettings::getConfig('dpa');
        $rows = $appSettings['rows'] ?? [];
        $this->fillData($rows);

        return [
            'awards' => [],
            'assets' => array_values($this->assets),
            'timeRestrictedAssets' => [],
            'timeRestrictedAwards' => [],
        ];
    }

    public function getConfigName() {
        return 'dpa';
    }


    /**
     * Fill data
     *
     * @param array $rows
     */
    private function fillData(array $rows) {
        foreach ($rows as $row) {
            $assets = $row['body_parts'] ?? [];
            foreach ($assets as $asset) {
                if ($asset) {
                    $assetId = (int)$asset;
                    $this->assets[$assetId] = $assetId;
                }
            }
        }
    }
}