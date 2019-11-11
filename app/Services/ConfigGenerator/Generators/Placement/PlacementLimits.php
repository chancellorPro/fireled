<?php

namespace App\Services\ConfigGenerator\Generators\Placement;

use App\Configs\PlacementLimitsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Hidden starages
 */
class PlacementLimits implements Generator
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
        $appSettingsConfig = new PlacementLimitsConfig();

        return $deployer->deploy('placement_limits', $appSettingsConfig->generate()->current());
    }
}
