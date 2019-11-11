<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\DefaultPetAssetConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * DefaultPetAssets
 */
class DefaultPetAssets implements Generator
{

    public function generate(Deployer $deployer)
    {
        $appSettingsConfig = new DefaultPetAssetConfig();

        return $deployer->deploy('default_pet_assets', $appSettingsConfig->generate()->current());
    }
}
