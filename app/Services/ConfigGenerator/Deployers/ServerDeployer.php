<?php

namespace App\Services\ConfigGenerator\Deployers;

use App\Models\Cms\AppConfig;

/**
 * Deploy for the server
 */
class ServerDeployer extends BaseDeployer
{

    /**
     * Client config prefix
     *
     * @var string
     */
    protected $configPrefixPath = 'config:%version%:server:';

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
        $data = [
            'version' => time(),
            'configs' => $configData,
        ];
        return $this->deploy($name, $data);
    }

    /**
     * Get platform
     *
     * @return int
     */
    public function getPlatform(): int
    {
        return AppConfig::PLATFORM_SERVER;
    }
}
