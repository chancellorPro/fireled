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
 * Class RandomPetNames
 */
class RandomPetNames implements Generator
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
        $appSettingsConfig = new AppSettingsConfig('random_pet_names');
        $result            = [];

        foreach ($appSettingsConfig->generate()->current() as $row) {
            foreach ($row['names'] as $names) {
                $result[$row['gender']][] = $names['name'];
            }
        }

        return $deployer->deploy('random_pet_names_1', $result);
    }
}
