<?php

namespace App\Traits;

use App\Models\Cms\AppSettings;
use App\Traits\PreviewUpload\UpdatePreviewImage;
use Validator;
use App\Exceptions\AppSettings\AppSettingsNotFound;
use App\Exceptions\AppSettings\AppSettingsValidate;

/**
 * Trait AppSettings
 */
trait AppSettingsTrait
{

    use UpdatePreviewImage;

    /**
     * @var Has asset ids in config
     */
    protected $hasAssets = false;
    /**
     * @var Has award ids in config
     */
    protected $hasAwards = false;

    /**
     * @var Asset fields in config
     */
    protected $assetFields = [];
    /**
     * @var Award fields in config
     */
    protected $awardFields = [];

    /**
     * @var Asset ids in config
     */
    protected $assetsIds;
    /**
     * @var Award ids in config
     */
    protected $awardIds;

    /**
     * Convert data types
     *
     * @param mixed $requestValue Request value
     * @param array $fieldData    Field data
     *
     * @return mixed
     *
     * @throws \Exception ValidatorException
     */
    private function convertDataTypes($requestValue, array $fieldData)
    {
        $type = isset($fieldData['config_type']) ? $fieldData['config_type'] : $fieldData['create_type'];

        switch ($type) {
            case 'select':
                if(is_numeric($requestValue)) {
                    $value = (int) $requestValue;
                } else {
                    $value = $requestValue;
                }
                break;
            case 'int':
            case 'autoincrement':
                $value = (int) $requestValue;
                break;
            case 'float':
                $value = (float) $requestValue;
                break;
            case 'embed':
                $value = $this->fillEmbedData($fieldData['embed'], $requestValue);
                break;
            default:
                $value = $requestValue;
                break;
        }

        return $value;
    }

    /**
     * Fill data
     *
     * @param array   $fields      Fields
     * @param array   $requestData Request data
     * @param array   $configData  Config data
     * @param integer $id          ID
     *
     * @return void
     *
     * @throws AppSettingsValidate Validate
     */
    private function fillData(array $fields, array $requestData, array &$configData, int $id)
    {
        foreach ($fields as $field => $fieldData) {

            /**
             * Validation of the value
             */
            if (!empty($fieldData['validator'])) {
                $validator = Validator::make(
                    [$field => $requestData[$field] ?? null],
                    [$field => $fieldData['validator']]
                );
                if ($validator->invalid()) {
                    throw new AppSettingsValidate($validator->errors()->first($field));
                }
            }

            if (key_exists($field, $requestData) || $fieldData['create_type'] == 'autoincrement') {
                switch ($fieldData['create_type']) {
                    case 'dropzone':
                        self::updatePreviewImage($requestData[$field], $configData['rows'][$id][$field]);
                        break;
                    case 'autoincrement':
                        if(!isset($requestData[$field])) {
                            $requestData[$field] = $id;
                        }
                        break;
                }

                $value = $this->convertDataTypes($requestData[$field], $fieldData);

                $configData['rows'][$id][$field] = $value;
            } elseif ($fieldData['create_type'] == 'embed' || in_array($fieldData['list_type'], ['award'])) {
                // for clear when all embed rows deleted
                // or for empty field
                unset($configData['rows'][$id][$field]);
            }
        }
    }

    /**
     * Fill embed data
     *
     * @param array $fields          Fields
     * @param array $requestDataRows Request data rows
     *
     * @return array
     *
     * @throws \Exception If value is not valid
     */
    private function fillEmbedData(array $fields, array $requestDataRows):array
    {
        $data = [];
        foreach ($requestDataRows as $requestData) {
            $row = [];
            foreach ($fields as $field => $fieldData) {
                /**
                 * Validation of the value
                 */
                if (!empty($fieldData['validator'])) {
                    $validator = Validator::make(
                        [$field => $requestData[$field]],
                        [$field => $fieldData['validator']]
                    );
                    if ($validator->invalid()) {
                        throw new \Exception($validator->errors()->first($field));
                    }
                }

                if (key_exists($field, $requestData)) {
                    $value       = $this->convertDataTypes($requestData[$field], $fieldData);
                    $row[$field] = $value;
                }
            }
            $data[] = $row;
        }
        return $data;
    }

    /**
     * Get fields list for config
     *
     * @param string $config Config name
     *
     * @return array
     * @throws AppSettingsNotFound NotFound
     */
    private function getFields(string $config):array
    {
        $appSettings = config('appsettings.' . $config);
        if (!$appSettings) {
            return [];
        }

        return $appSettings['fields'];
    }

    /**
     * Get form settings for config
     *
     * @param string $config Config name
     *
     * @return array
     * @throws AppSettingsNotFound NotFound
     */
    private function getFormSettings(string $config):array
    {
        $appSettings = config('appsettings.' . $config);
        if (!$appSettings) {
            return [];
        }

        $setings['name']                 = $appSettings['name'] ?? ucfirst(str_replace('_', ' ', $config));
        $setings['add_mult_rows']        = $appSettings['add_mult_rows'] ?? false;
        $setings['fixed_rows']           = $appSettings['fixed_rows'] ?? false;
        $setings['default_structure']    = $appSettings['default_structure'] ?? false;
        $setings['with_award']           = $appSettings['with_award'] ?? false;
        $setings['tabs']                 = $appSettings['tabs'] ?? false;
        $setings['removable']            = $appSettings['removable'] ?? true;
        $setings['item_checkbox_hidden'] = $appSettings['item_checkbox_hidden'] ?? false;
        $setings['inverted_table']       = $appSettings['inverted_table'] ?? false;
        $setings['config_filter']        = $appSettings['config_filter'] ?? false;
        $setings['with_default_row']     = $appSettings['with_default_row'] ?? false;

        return $setings;
    }

    /**
     * Get counter for config
     *
     * @param string  $config  Config name
     * @param integer $counter Counter
     *
     * @return void
     * @throws AppSettingsNotFound NotFound
     */
    private function setCounter(string $config, int $counter)
    {
        $appSettings = config('appsettings.' . $config);
        if (!$appSettings) {
            throw new AppSettingsNotFound($config);
        }

        AppSettings::setConfig($appSettings['counter'], $counter);
    }

    /**
     * Get counter for config
     *
     * @param string $config Config name
     *
     * @return integer
     * @throws AppSettingsNotFound NotFound
     */
    private function getCounter(string $config):int
    {
        $appSettings = config('appsettings.' . $config);
        if (!$appSettings) {
            throw new AppSettingsNotFound($config);
        }

        $counter = AppSettings::getConfig($appSettings['counter']);

        return empty($counter) ? 1 : (int) $counter;
    }

    /**
     * Get presets list for config
     *
     * @param string $config Config name
     *
     * @return array
     */
    private function getPresets(string $config):array
    {
        $presets     = config("appsettings.$config.presets") ?? [];
        $presetsData = [];
        foreach ($presets as $field => $presetName) {
            $list = config("presets.$presetName");

            if (!$list && strpos($presetName, '::') !== false) {
                $list = $presetName();
            }

            /**
             * For group select preview
             */
            if (isset($list[0]['collection'])) {
                $groupValues = collect([]);
                foreach ($list as $selectGroup) {
                    $groupValues = $groupValues->merge($selectGroup['collection']);
                }
                $presetsData[$field]['forView'] = arrayToKeyValue($groupValues->toArray(), 'id', 'name');
            }
            /**
             * For select preview
             */
            else {
                $presetsData[$field]['forView']   = arrayToKeyValue($list, 'id', 'name');
            }

            $presetsData[$field]['forSelect'] = arrayToCollection($list);
        }
        return $presetsData;
    }

    /**
     * Get upload folder
     *
     * @return string
     */
    protected static function getUploadFolder(): string
    {
        $name = basename(request()->route()->parameters['config']);
        return AppSettings::getUploadFolder($name);
    }

    /**
     * Get additional data
     *
     * @param array $fields
     *
     * @return void
     */
    private function getAdditionalData(array $fields) {
        foreach ($fields as $fieldId => $fieldData) {
            if(is_array($fieldData)) {
                $this->getAdditionalData($fieldData);
            } elseif (!empty($fieldData)) {
                if(in_array($fieldId, $this->assetFields)) {
                    $this->assetsIds[$fieldData] = $fieldData;
                } elseif (in_array($fieldId, $this->awardFields)) {
                    $this->awardIds[$fieldData] = $fieldData;
                }
            }
        }
    }

    /**
     * Scan for additional data
     * Scan for additional data
     *
     * @param array $fields Fields
     *
     * @return void
     */
    private function scanForAdditionalData(array $fields) {
        foreach ($fields as $field => $fieldData){
            switch ($fieldData['list_type']) {
                case 'asset_preview':
                    $this->hasAssets = true;
                    $this->assetFields[] = $field;
                    break;
                case 'award':
                    $this->hasAwards = true;
                    $this->awardFields[] = $field;
                    break;
            }

            if(isset($fieldData['embed'])) {
                $this->scanForAdditionalData($fieldData['embed']);
            }
        }
    }
}
