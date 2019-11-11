<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\MealIngredientGroupConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class MealIngredientGroup
 */
class MealIngredientGroup implements Generator
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
        return $deployer->deploy('meal_ingredient_groups', (new MealIngredientGroupConfig())->generate()->current());
    }
}
