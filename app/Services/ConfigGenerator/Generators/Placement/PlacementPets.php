<?php

namespace App\Services\ConfigGenerator\Generators\Placement;

use App\Models\Cms\Placement;
use App\Services\ConfigGenerator\Generators\Placement\Placement as PlacementGenerator;

/**
 * Pets
 */
class PlacementPets extends PlacementGenerator
{

    /**
     * Config name
     *
     * @var string
     */
    protected $configName = 'pets';

    /**
     * Placement types
     *
     * @var array
     */
    protected $placementTypes = [
        Placement::PLACEMENT_TYPE_PET
    ];
}
