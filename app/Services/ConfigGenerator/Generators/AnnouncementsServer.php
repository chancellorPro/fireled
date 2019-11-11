<?php

namespace App\Services\ConfigGenerator\Generators;

use App\Configs\AnnouncementsConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class AnnouncementsServer
 */
class AnnouncementsServer implements Generator
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
        return $deployer->deploy('announcements', (new AnnouncementsConfig())->generate()->current());
    }
}
