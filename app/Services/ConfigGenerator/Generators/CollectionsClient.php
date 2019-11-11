<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\CollectionConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Collections client
 */
class CollectionsClient implements Generator
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
        $collections = new CollectionConfig;
        $collections->setAliases([
            'award_id'    => 'aid',
            'asset_id'    => 'a',
            'preview_url' => 'url',
            'slots'       => 'i',
            'name'        => 'n',
        ]);
        $collections->setAllowedFields([
            'id',
            'preview_url',
            'award_id',
            'asset_id',
            'name',
            'slots',
        ]);
        return $deployer->deploy('collections', $collections->generate()->current());
    }
}
