<?php

namespace App\Services\ConfigGenerator\Generators\Placement;

use App\Configs\PlacementConfig;
use App\Services\ConfigGenerator\Contract\Deployer;
use App\Services\ConfigGenerator\Contract\Generator;

/**
 * Class Placement
 */
abstract class Placement implements Generator
{

    /**
     * Config name
     *
     * @var string
     */
    protected $configName = '';

    /**
     * Placement types
     *
     * @var array
     */
    protected $placementTypes = [];

    /**
     * Hidden fields
     *
     * @var array
     */
    protected $hiddenFields = [];

    /**
     * Deploy config
     *
     * @param Deployer $deployer Deployer
     *
     * @return mixed|string
     */
    public function generate(Deployer $deployer)
    {
        $placementConfig = new PlacementConfig;
        $placementConfig->setPlacementTypes($this->placementTypes);
        $placementConfig->setHiddenFields($this->hiddenFields);

        return $deployer->deploy($this->configName, $placementConfig->generate()->current());
    }
}
