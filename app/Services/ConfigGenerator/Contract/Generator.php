<?php
/**
 * Created by PhpStorm.
 * User: sergey
 * Date: 17.12.18
 * Time: 11:09
 */

namespace App\Services\ConfigGenerator\Contract;

/**
 * Interface Generator
 */
interface Generator
{

    /**
     * Generate the config and upload to redis
     * Returns the list of uploaded redis keys
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed
     */
    public function generate(Deployer $deployer);
}
