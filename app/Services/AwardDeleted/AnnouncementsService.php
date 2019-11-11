<?php

namespace App\Services\AwardDeleted;

use App\Models\Cms\Announcements;
use App\Services\AwardDeleted\Builder\AwardDeletedParamsBuilder;

class AnnouncementsService
{
    /**
     * Handle the event.
     *
     * @param AwardDeletedParamsBuilder $builder
     * @return void
     */
    public function handle(AwardDeletedParamsBuilder $builder)
    {
        $announcement = Announcements::where(['award_id' => $builder->getAwardId()])->first();
        $announcement->update(['award_id' => null]);
    }
}
