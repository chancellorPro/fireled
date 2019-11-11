<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\CropsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class Crops
 */
class Crops implements Generator
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
        return $deployer->deploy('crops', (new CropsConfig())->generate()->current());
    }
}
