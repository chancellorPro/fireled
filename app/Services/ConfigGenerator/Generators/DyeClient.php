<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\DyeConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class DyeClient
 */
class DyeClient implements Generator
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
        return $deployer->deploy('dyes', (new DyeConfig())->generate()->current());
    }
}
