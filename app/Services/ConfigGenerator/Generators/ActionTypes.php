<?php
/**
 * Created by PhpStorm.
 * User: sergey
 * Date: 19.11.18
 * Time: 12:54
 */

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\ActionTypeConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class ActionTypes
 */
class ActionTypes implements Generator
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
        return $deployer->deploy('action_types', (new ActionTypeConfig)->generate()->current());
    }
}
