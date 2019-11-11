<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\AssetLimitsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class AssetLimits
 */
class AssetLimits implements Generator
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
        $appSettingsConfig = new AssetLimitsConfig;

        return $deployer->deploy('asset_limits', $appSettingsConfig->generate()->current());
    }
}
