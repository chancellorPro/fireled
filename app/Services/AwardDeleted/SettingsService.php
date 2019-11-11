<?php

namespace App\Services\AwardDeleted;

use App\Models\Cms\AppSettings;
use App\Services\AwardDeleted\Builder\AwardDeletedParamsBuilder;

class SettingsService
{

    /**
     * Handle the event.
     *
     * @param AwardDeletedParamsBuilder $builder
     * @return void
     */
    public function handle(AwardDeletedParamsBuilder $builder)
    {
        $configData  = AppSettings::getConfig($builder->getConfigName());
        foreach ($configData['rows'] as $k => $item) {
            if(isset($item['award_id']) && $item['award_id'] == $builder->getAwardId()) {
                $configData['rows'][$k]['award_id'] = "";
            }
        }

        AppSettings::setConfig($builder->getConfigName(), $configData);
    }
}
