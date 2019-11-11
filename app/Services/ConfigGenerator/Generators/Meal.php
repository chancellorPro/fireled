<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\MealConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class Meal
 */
class Meal implements Generator
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
        return $deployer->deploy('meal', (new MealConfig())->generate()->current());
    }
}
