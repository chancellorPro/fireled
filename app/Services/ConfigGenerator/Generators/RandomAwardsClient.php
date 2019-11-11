<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\RandomAwardConfig;
use App\Models\Cms\RandomAward;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class RandomAwards
 */
class RandomAwardsClient implements Generator
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
        $randomAwards->setTypes([
            RandomAward::RANDOM_AWARD_TYPE_COMMON,
        ]);
        return $deployer->deploy('random_awards', $randomAwards->generate()->current());
    }
}
