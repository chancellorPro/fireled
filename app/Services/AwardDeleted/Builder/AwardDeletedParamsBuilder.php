<?php

namespace App\Services\AwardDeleted\Builder;

class AwardDeletedParamsBuilder
{
    /**
     * @var string
     */
    public $award_id;

    /**
     * @var string
     */
    public $config_name;

    /**
     * @param $award_id
     */
    public function setAwardId($award_id)
    {
        $this->award_id = $award_id;
    }

    /**
     * @return string
     */
    public function getAwardId()
    {
        return $this->award_id;
    }

    /**
     * @param $config_name
     */
    public function setConfigName($config_name)
    {
        $this->config_name = $config_name;
    }

    /**
     * @return string
     */
    public function getConfigName()
    {
        return $this->config_name;
    }
}
