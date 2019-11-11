<?php

namespace App\Services\AwardDeleted;

use App\Events\AwardDeleted;
use App\Models\Cms\Tamatool;
use App\Services\AwardDeleted\Builder\AwardDeletedParamsBuilder;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class TamatoolService
{

    /**
     * Handle the event.
     *
     * @param AwardDeletedParamsBuilder $builder
     * @return void
     */
    public function handle(AwardDeletedParamsBuilder $builder)
    {
        $tamatool = Tamatool::where(['cooldown_award_id' => $builder->getAwardId()])->first();
        if (!empty($tamatool)) {
            $tamatool->update(['cooldown_award_id' => null]);
        } else {
            $tamatool = Tamatool::where(['complete_count_award_id' => $builder->getAwardId()])->first();
                if (!empty($tamatool)) {
                    $tamatool->update(['complete_count_award_id' => null]);
                }
        }
    }
}
