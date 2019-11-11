<?php

namespace App\Services\Jenkins;


use App\Exceptions\Jenkins\JenkinsConnectException;
use JenkinsKhan\Jenkins;

/**
 * JenkinsFactory
 */
class JenkinsFactory
{

    /**
     * Get Jenkins client
     *
     * @return Jenkins Jenkins client
     *
     * @throws JenkinsConnectException
     */
    public static function client()
    {
        $connectUrl = env('JENKINS_SCHEMA') . '://' .
            env('JENKINS_USER') . ':' .
            env('JENKINS_TOKEN') . '@' .
            env('JENKINS_HOST') . ':' .
            env('JENKINS_PORT');

        $client = new Jenkins($connectUrl);

        if (!$client->isAvailable()) {
            throw new JenkinsConnectException;
        }

        return $client;
    }
}