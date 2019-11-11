<?php

namespace App\Services\AwardDeleted;

use App\Models\Cms\Meal;
use App\Services\AwardDeleted\Builder\AwardDeletedParamsBuilder;

class MealService
{
    /**
     * Handle the event.
     *
     * @param AwardDeletedParamsBuilder $builder
     * @return void
     */
    public function handle(AwardDeletedParamsBuilder $builder)
    {
        $meal = Meal::where(['award_id' => $builder->getAwardId()])->first();
        $meal->update(['award_id' => null]);
    }
}
