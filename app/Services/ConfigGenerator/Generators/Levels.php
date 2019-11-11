<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\AppSettingsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class Levels
 */
class Levels implements Generator
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
        $appSettingsConfig = new AppSettingsConfig('levels');

        return $deployer->deploy('levels', $appSettingsConfig->generate()->current());
    }
}
