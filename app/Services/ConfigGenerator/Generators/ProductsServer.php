<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\ProductConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Products for server
 */
class ProductsServer implements Generator
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
        $productsConfig = new ProductConfig();
        $productsConfig->setAliases([
            'id' => 'product_id',
        ]);
        $productsConfig->setFilters([
            'id' => 'castToString',
        ]);
        $productsConfig->setHiddenFields([
            'type',
            'name',
            'description',
            'currency',
            'preview_url',
            'price',
            'created_at',
            'updated_at',
        ]);

        return $deployer->deploy('products', $productsConfig->generate()->current());
    }
}
