<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\LocalizationConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class Localization
 */
class LocalizationEN implements Generator
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
        $localizations = new LocalizationConfig();
        $localizations->setLocate('en');

        return $deployer->deploy('localization_en', ($localizations)->generate()->current());
    }
}
