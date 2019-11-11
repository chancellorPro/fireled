<?php

namespace App\Services\Jenkins;


/**
 * JenkinsService
 */
class JenkinsService
{

    /**
     * HTTP Client
     *
     * @var \JenkinsKhan\Jenkins|null
     */
    private $client = null;

    /**
     * JenkinsService constructor.
     *
     * @throws \App\Exceptions\Jenkins\JenkinsConnectException
     */
    public function __construct()
    {
        $this->client = JenkinsFactory::client();
    }

    public function getMultiBranchJobs(string $jobName)
    {
        $url = "/job/$jobName/api/json";
        $response = json_decode($this->client->execute($url, [
            \CURLOPT_RETURNTRANSFER => 1
        ]), 1);

        if (!empty($response['jobs'])) {
            foreach ($response['jobs'] as $key => $item) {
                $response['jobs'][$key]['decoded_name'] = urldecode($item['name']);
            }
        }

        return $response['jobs'] ?? [];
    }
}