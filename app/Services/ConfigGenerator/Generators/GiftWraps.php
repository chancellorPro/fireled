<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\GiftWrapConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * GiftWraps
 */
class GiftWraps implements Generator
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
        return $deployer->deploy('gift_wraps', (new GiftWrapConfig)->generate()->current());
    }
}
