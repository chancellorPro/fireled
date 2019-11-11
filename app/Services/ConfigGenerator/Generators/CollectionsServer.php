<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\CollectionConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Collections server
 */
class CollectionsServer implements Generator
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
        $collections->setAllowedFields([
            'id',
            'started_at',
            'finished_at',
            'award_id',
        ]);
        return $deployer->deploy('collections', $collections->generate()->current());
    }
}
