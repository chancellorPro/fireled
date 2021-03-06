<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\TamatoolConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class Tamatool
 */
class Tamatool implements Generator
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
        return $deployer->deploy('tamatool', (new TamatoolConfig())->generate()->current());
    }
}
