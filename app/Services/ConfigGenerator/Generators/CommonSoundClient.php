<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\SoundConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class CommonSoundClient
 */
class CommonSoundClient implements Generator
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
        $appSettingsConfig = new SoundConfig('common_sound');

        return $deployer->deploy('common_sound', $appSettingsConfig->generate()->current());
    }
}
