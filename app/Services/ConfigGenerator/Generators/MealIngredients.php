<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\MealIngredientsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class MealIngredients
 */
class MealIngredients implements Generator
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
        return $deployer->deploy('ingredients', (new MealIngredientsConfig())->generate()->current());
    }
}
