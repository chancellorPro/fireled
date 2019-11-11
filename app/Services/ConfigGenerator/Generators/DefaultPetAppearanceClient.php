<?php
namespace App\Services\ConfigGenerator\Generators;

use App\Configs\AppSettingsConfig;
use App\Configs\DefaultPetAppearanceConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class DefaultPetAppearanceClient
 */
class DefaultPetAppearanceClient implements Generator
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
        $appSettingsDpaConfig       = new DefaultPetAppearanceConfig('dpa');
        $appSettingsDpaColorsConfig = new AppSettingsConfig('dpa_colors');

        $result = [
            'appearances' => $appSettingsDpaConfig->generate()->current(),
            'colors'     => $appSettingsDpaColorsConfig->generate()->current(),
        ];

        return $deployer->deploy('dpa', $result);
    }
}
