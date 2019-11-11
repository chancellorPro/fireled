<?php

namespace App\Services\ConfigGenerator\Generators\Placement;

use App\Models\Cms\Placement;
use App\Services\ConfigGenerator\Generators\Placement\Placement as PlacementGenerator;

/**
 * Rooms
 */
class PlacementRooms extends PlacementGenerator
{

    /**
     * Config name
     *
     * @var string
     */
    protected $configName = 'rooms';

    /**
     * Placement types
     *
     * @var array
     */
    protected $placementTypes = [
        Placement::PLACEMENT_TYPE_ROOM,
        Placement::PLACEMENT_TYPE_BASEMENT,
        Placement::PLACEMENT_TYPE_GARDEN,
        Placement::PLACEMENT_TYPE_HABITAT,
    ];

    /**
     * Hidden fields
     *
     * @var array
     */
    protected $hiddenFields = [];
}
