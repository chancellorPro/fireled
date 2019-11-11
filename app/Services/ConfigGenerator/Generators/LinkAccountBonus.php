<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\LinkAccountBonusConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * NeighborBonus server config
 */
class LinkAccountBonus implements Generator
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
        return $deployer->deploy('link_account_bonus', (new LinkAccountBonusConfig())->generate()->current());
    }
}
