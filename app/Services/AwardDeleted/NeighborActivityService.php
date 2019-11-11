<?php

namespace App\Services\AwardDeleted;

use App\Models\Cms\NeighborActivity;
use App\Services\AwardDeleted\Builder\AwardDeletedParamsBuilder;

class NeighborActivityService
{
    /**
     * Handle the event.
     *
     * @param AwardDeletedParamsBuilder $builder
     * @return void
     */
    public function handle(AwardDeletedParamsBuilder $builder)
    {
        $neighbor_activity = NeighborActivity::where(['award_id' => $builder->getAwardId()])->first();
        $neighbor_activity->update(['award_id' => null]);
    }
}
