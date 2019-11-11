<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\AppSettingsConfig;
use App\Configs\NeighborActivityConfig;
use App\Configs\NeighborBonusConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * NeighborActivity client config
 */
class NeighborActivityClient implements Generator
{

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     *
     * @throws \Exception Exception from App\Configs\Base\Config
     */
    public function generate(Deployer $deployer)
    {
        $config = [
            'neighbor_activity' => (new NeighborActivityConfig)->generate()->current(),
            'neighbor_bonus'    => (new NeighborBonusConfig)->generate()->current(),
        ];

        $autoVisit = (new AppSettingsConfig('neighbor_auto_visit'))->generate()->current();
        if (empty($autoVisit[0])) {
            throw new \Exception("neighbor_auto_visit config not found");
        }

        $config['neighbor_auto_visit'] = $autoVisit[0];

        return $deployer->deploy('neighbor_activity', $config);
    }
}
