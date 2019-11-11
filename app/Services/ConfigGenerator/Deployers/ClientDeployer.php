<?php

namespace App\Services\ConfigGenerator\Deployers;

use App\Models\Cms\AppConfig;

/**
 * Deploy for the client
 */
class ClientDeployer extends BaseDeployer
{

    /**
     * Client config prefix
     *
     * @var string
     */
    protected $configPrefixPath = 'config:%version%:client:';

    /**
     * Deploy list with config's names
     *
     * @param string $name       Name
     * @param mixed  $configData Data
     *
     * @return string
     */
    public function deployList(string $name, $configData):string
    {
        $list = [];

        foreach ($configData as $configName => $data) {
            if (is_array($data)) {
                foreach ($data as $redisKey => $redisFullPath) {
                    $list[$configName][] = $redisKey . '?' . time();
                }
            } else {
                $list[$configName] = substr($data, strrpos($data, ':') + 1) . '?' . time();
            }
        }

        return $this->deploy($name, $list);
    }

    /**
     * Get platform
     *
     * @return int
     */
    public function getPlatform(): int
    {
        return AppConfig::PLATFORM_CLIENT;
    }
}
