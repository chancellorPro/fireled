<?php

namespace App\Traits\Deploy;


/**
 * Trait for the model
 */
trait DeployHelper
{

    /**
     * Name of forward deploy field
     */
    protected $DEPLOYED_AT_FIELD = 'deployed_at';

    /**
     * Name of back deploy field
     */
    protected $DEPLOYED_BACK_FIELD = 'deployed_back_at';

    /**
     * Returns the name of field with deployed date
     *
     * @param string $fromEnv From environment
     * @param string $toEnv   To environment
     *
     * @return string
     */
    protected function getDeployedAtName(string $fromEnv, string $toEnv):string
    {
        return $this->isRightFlow($fromEnv, $toEnv) ? $this->DEPLOYED_AT_FIELD : $this->DEPLOYED_BACK_FIELD;
    }

    /**
     * Is it right flow (dev -> stage OR stage -> live)
     *
     * @param string $fromEnv From environment
     * @param string $toEnv   To environment
     *
     * @return bool
     */
    protected function isRightFlow(string $fromEnv, string $toEnv):bool
    {
        return isRightFlow($fromEnv, $toEnv);
    }
}
