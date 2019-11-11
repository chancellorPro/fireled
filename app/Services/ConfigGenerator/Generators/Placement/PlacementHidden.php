<?php

namespace App\Services\ConfigGenerator\Generators\Placement;

use App\Models\Cms\Placement;
use App\Services\ConfigGenerator\Generators\Placement\Placement as PlacementGenerator;

/**
 * Hidden starages
 */
class PlacementHidden extends PlacementGenerator
{

    /**
     * Config name
     *
     * @var string
     */
    protected $configName = 'hidden_storages';

    /**
     * Placement types
     *
     * @var array
     */
    protected $placementTypes = [
        Placement::PLACEMENT_TYPE_HIDDEN
    ];
}
