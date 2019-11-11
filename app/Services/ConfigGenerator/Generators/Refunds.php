<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\RefundsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class Refunds
 */
class Refunds implements Generator
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
        $appSettingsConfig = new RefundsConfig();

        return $deployer->deploy('refunds', $appSettingsConfig->generate()->current());
    }
}
