<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\ProductConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Products for client
 */
class ProductsClient implements Generator
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
            'award_id'    => 'aid',
            'name'        => 'n',
            'price'       => 'p',
            'preview_url' => 'u',
            'type'        => 't',
        ]);
        $productsConfig->setHiddenFields([
            'description',
            'currency',
            'created_at',
            'updated_at',
        ]);

        $webHookServerUrl = env('WEB_HOOK_SERVER_URL_' . strtoupper(environment()));

        $result = [];
        foreach ($productsConfig->generate()->current() as $product) {
            $result[] = array_merge($product, [
                'url' => $webHookServerUrl . "products/?id={$product['id']}&type=product",
            ]);
        }

        return $deployer->deploy('products', $result);
    }
}
