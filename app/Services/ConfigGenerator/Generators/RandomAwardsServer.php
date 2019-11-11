<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\RandomAwardConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class RandomAwards
 */
class RandomAwardsServer implements Generator
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
        $randomAwards = new RandomAwardConfig;
        return $deployer->deploy('random_awards', $randomAwards->generate()->current());
    }
}
