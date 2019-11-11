<?php

namespace App\Services\ConfigGenerator\Deployers;

use App\Models\Cms\AppConfig;
use App\Models\CmsModel;
use App\Services\ConfigGenerator\Contract\Deployer;
use Carbon\Carbon;

/**
 * Class BaseDeployer
 */
abstract class BaseDeployer implements Deployer
{

    /**
     * Config prefix name
     *
     * @var string
     */
    protected $configPrefixPath;

    /**
     * Config version
     *
     * @var int
     */
    protected $version;

    /**
     * BaseDeployer constructor.
     *
     * @param integer $version Version
     */
    public function __construct(int $version = 1)
    {
        $this->version = $version;
        $this->configPrefixPath = str_replace('%version%', $version, $this->configPrefixPath);
    }

    /**
     * Deploy
     *
     * @param string $name       Name of the config
     * @param mixed  $configData Config data
     *
     * @return string
     */
    public function deploy(string $name, $configData):string
    {
        $key = $this->configPrefixPath . $name;

        $appConfig = new AppConfig;
        $appConfig->setConnection(CmsModel::connection());
        $appConfig->create(
            [
                'key'        => $key,
                'name'       => $name,
                'version'    => $this->version,
                'platform'   => $this->getPlatform(),
                'value'      => json_encode($configData),
                'updated_at' => Carbon::now(),
            ]
        );

        return $key;
    }
}
