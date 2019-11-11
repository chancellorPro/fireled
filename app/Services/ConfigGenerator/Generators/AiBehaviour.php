<?php
/**
 * Created by PhpStorm.
 * User: sergey
 * Date: 19.11.18
 * Time: 12:54
 */

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\AppSettingsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class AiBehaviour
 */
class AiBehaviour implements Generator
{

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     *
     * @throws \Exception ValidatorException
     */
    public function generate(Deployer $deployer)
    {
        $appSettingsConfig = new AppSettingsConfig('ai_behaviour');

        return $deployer->deploy('ai_behaviour', $appSettingsConfig->generate()->current());
    }
}
