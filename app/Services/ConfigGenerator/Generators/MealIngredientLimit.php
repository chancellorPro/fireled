<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\MealIngredientLimitConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class MealIngredientLimit
 */
class MealIngredientLimit implements Generator
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
        return $deployer->deploy('help_requests_limits', (new MealIngredientLimitConfig())->generate()->current());
    }
}
