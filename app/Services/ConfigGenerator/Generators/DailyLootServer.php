<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\DailyLootConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class DailyLootServer
 */
class DailyLootServer implements Generator
{

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     * @throws \Exception ValidatorException
     */
    public function generate(Deployer $deployer)
    {
        return $deployer->deploy('daily_loot', (new DailyLootConfig())->generate()->current());
    }
}
