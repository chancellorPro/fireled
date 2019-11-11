<?php

namespace App\Services\ConfigGenerator\Generators\Asset;

use App\Configs\AssetConfig;
use App\Models\Cms\Asset;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class Assets
 */
abstract class Assets implements Generator
{

    /**
     * Get asset type
     *
     * @return integer
     */
    abstract protected function getAssetType():int;

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     */
    public function generate(Deployer $deployer)
    {
        $assetsConfig = new AssetConfig();
        $assetsConfig->setAssetType($this->getAssetType());

        $configNames = [];

        $pageNumber = 1;
        foreach ($assetsConfig->generate() as $configData) {
            /**
             * Asset type alias
             * 1 => 'furniture'
             * 2 => 'clothes'
             * etc.
             */
            $assetTypeAlias = Asset::ASSET_TYPE_ALIASES[$this->getAssetType()];

            $configName = "assets_{$assetTypeAlias}.{$pageNumber}";

            $fullConfigKey = $deployer->deploy($configName, $configData);

            $configNames[$configName] = $fullConfigKey;

            $pageNumber++;
        }

        return $configNames;
    }
}
