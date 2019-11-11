<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\MakeupKitConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * MakeupKits
 */
class MakeupKits implements Generator
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
        $config = new MakeupKitConfig();

        return $deployer->deploy('makeup_kit', $config->generate()->current());
    }
}
