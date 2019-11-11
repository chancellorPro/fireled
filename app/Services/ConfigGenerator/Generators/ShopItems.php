<?php
/**
 * Created by PhpStorm.
 * User: sergey
 * Date: 19.11.18
 * Time: 12:54
 */

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\ShopItemConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class ShopItems
 */
class ShopItems implements Generator
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
        $configNames = [];

        foreach ((new ShopItemConfig)->generate() as $shopID => $data) {
            $configKey = "shop.{$shopID}";

            $configNames[$configKey] = $deployer->deploy($configKey, $data);
        }

        return $configNames;
    }
}
