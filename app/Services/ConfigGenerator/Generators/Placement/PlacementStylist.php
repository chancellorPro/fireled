<?php

namespace App\Services\ConfigGenerator\Generators\Placement;

use App\Models\Cms\Placement;
use App\Services\ConfigGenerator\Generators\Placement\Placement as PlacementGenerator;

/**
 * Stylist
 */
class PlacementStylist extends PlacementGenerator
{

    /**
     * Config name
     *
     * @var string
     */
    protected $configName = 'stylist';

    /**
     * Placement types
     *
     * @var array
     */
    protected $placementTypes = [
        Placement::PLACEMENT_TYPE_STYLIST
    ];
}
