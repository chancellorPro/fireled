<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\AppSettingsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class StateLimits
 */
class StateLimits implements Generator
{

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     *
     * @throws \Exception ValidatorException
     */
    public function generate(Deployer $deployer)
    {
        $appSettingsConfig = new AppSettingsConfig('state_limits');

        return $deployer->deploy('state_limits', $appSettingsConfig->generate()->current());
    }
}
