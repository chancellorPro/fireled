<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\ProductConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;
use View;

/**
 * Products for webhooks
 */
class ProductsFacebook implements Generator
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
        $productsConfig->setAliases();
        $productsConfig->setHiddenFields([
            'created_at',
            'updated_at',
        ]);
        $productsConfig->setFilters([
            'preview_url' => 'previewFilter',
        ]);

        $webHookServerUrl = env('WEB_HOOK_SERVER_URL_' . strtoupper(environment()));

        $configNames = [];
        foreach ($productsConfig->generate()->current() as $product) {
            $currency = arrayToCollection(config('presets.currency'))
                ->where('id', $product['currency'])->first();

            $product = array_merge($product, [
                'url'      => $webHookServerUrl . "products/?id={$product['id']}&type=product",
                'currency' => $currency->value,
            ]);

            $configNames[] = $deployer->deploy('product_facebook_' . $product['id'], [
                'product_id' => (string) $product['id'],
                'data'       => View::make('vendor.facebook.product', $product)->render(),
            ]);
        }

        return $configNames;
    }
}
