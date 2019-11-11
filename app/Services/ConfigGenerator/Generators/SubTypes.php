<?php
/**
 * Created by PhpStorm.
 * User: sergey
 * Date: 19.11.18
 * Time: 12:54
 */

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\SubTypeConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class SubTypes
 */
class SubTypes implements Generator
{

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     */
    public function generate(Deployer $deployer)
    {
        return $deployer->deploy('assets_attribute_pattern', (new SubTypeConfig)->generate()->current());
    }
}
