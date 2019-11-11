<?php
namespace App\Services\AssetConfigDependency\Configs;

use App\Models\Cms\AppSettings;

/**
 * Class BaseConfig
 * @package App\Services\AssetConfigDependency\Configs
 */
class BaseConfig
{
    /**
     * Config name
     *
     * @var string
     */
    protected $config;

    /**
     * @var Asset ids in config
     */
    protected $assetsIds = [];
    /**
     * @var Award ids in config
     */
    protected $awardIds = [];

    /**
     * BaseConfig constructor.
     *
     * @param string $config Config name
     */
    public function __construct(string $config)
    {
        $this->config = $config;
    }

    /**
     * Get assets and awards
     *
     * @return array
     */
    public function getAssetsAndAwards() {
        $appSettings = AppSettings::getConfig($this->config);
        $firelds = $appSettings['rows'] ?? [];
        $this->getAdditionalData($firelds);
        return [
            'awards' => $this->awardIds,
            'assets' => $this->assetsIds,
        ];
    }

    /**
     * Get additional data
     *
     * @param array $fields
     */
    private function getAdditionalData(array $fields) {
        foreach ($fields as $fieldId => $fieldData) {

            if(is_array($fieldData)) {
                $this->getAdditionalData($fieldData);
            } elseif (!empty($fieldData)) {
                $fieldData = (int)$fieldData;
                switch ((string)$fieldId) {
                    case 'asset_id':
                        $this->assetsIds[$fieldData] = $fieldData;
                        break;
                    case 'award_id':
                        $this->awardIds[$fieldData] = $fieldData;
                        break;
                    default:
                        if(strpos($fieldId, '_award') !== false) {
                            $this->awardIds[$fieldData] = $fieldData;
                        }
                        break;
                }
            }
        }
    }
}