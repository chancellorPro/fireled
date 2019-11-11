<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\SoundConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class AssetSoundClient
 */
class AssetSoundClient implements Generator
{

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     * @throws \Exception ValidatorException
     */
    public function generate(Deployer $deployer)
    {
        $appSettingsConfig = new SoundConfig('asset_sound');

        return $deployer->deploy('asset_sound', $appSettingsConfig->generate()->current());
    }
}
