<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\MaintenanceConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Maintenance
 */
class Maintenance implements Generator
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
        $config = new MaintenanceConfig();

        return $deployer->deploy('maintainse', $config->generate()->current());
    }
}
