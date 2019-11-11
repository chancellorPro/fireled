<?php

namespace App\Services;

use GuzzleHttp\Client;

/**
 * Class PC1apiService
 */
class PC1apiService
{

    /**
     * Send request to CMS
     *
     * @param string $cmd  Action
     * @param array  $data Data
     *
     * @return array|mixed
     * @throws \GuzzleHttp\Exception\GuzzleException GuzzleException
     */
    public static function send(string $cmd, array $data = [])
    {
        $HTTPClient = new Client();
        $response   = $HTTPClient->request('GET', env('PC1_CMS_URL') . '/restapi.php', [
            'query' => [
                'cmd'  => $cmd,
                'data' => json_encode($data),
                'sign' => md5(json_encode($data) . env('PC1_SECRET')),
            ],
        ]);

        $responseDataStr = $response->getBody()->getContents();
        $responseData    = $responseDataStr ? json_decode($responseDataStr, true) : [];

        return $responseData;
    }

    /**
     * Send request to CMS
     *
     * @param string $cmd  Action
     * @param array  $data Data
     *
     * @return array|mixed
     * @throws \GuzzleHttp\Exception\GuzzleException GuzzleException
     */
    public static function sendToApi(string $cmd, array $data = [])
    {
        $HTTPClient = new Client();
        $response   = $HTTPClient->request('GET', env('PC1_API_URL') . '/s2sapi.php', [
            'query' => [
                'cmd'  => $cmd,
                'data' => json_encode($data),
                'sign' => md5(json_encode($data) . env('PC1_SECRET')),
            ],
        ]);

        $responseDataStr = $response->getBody()->getContents();
        $responseData    = $responseDataStr ? json_decode($responseDataStr, true) : [];
//        dd($responseDataStr);
//        dd($response->getHeader('X-Node-ID'));
        return $responseData;
    }
}
