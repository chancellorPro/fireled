<?php
/**
 * Created by PhpStorm.
 * User: sergey
 * Date: 17.12.18
 * Time: 11:08
 */

namespace App\Services\ConfigGenerator\Contract;

/**
 * Interface Deployed
 */
interface Deployer
{

    /**
     * Deploy the data
     * Returns full redis key
     *
     * @param string $name       Name
     * @param mixed  $configData Config data
     *
     * @return string
     */
    public function deploy(string $name, $configData):string;

    /**
     * Deploy list of config's keys
     *
     * @param string $name       Name
     * @param mixed  $configData Config data
     *
     * @return string
     */
    public function deployList(string $name, $configData):string;

    /**
     * Get platform
     *
     * @return int
     */
    public function getPlatform():int;
}
