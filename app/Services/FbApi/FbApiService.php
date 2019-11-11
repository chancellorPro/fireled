<?php

namespace App\Services\FbApi;


use Facebook\Authentication\AccessToken;
use Facebook\Facebook;

class FbApiService
{

    const DEFAULT_GRAPH_API_VERSION = 'v2.10';

    private $fb = null;

    private $accessToken = null;

    /**
     * FbApiService constructor.
     *
     * @throws \Facebook\Exceptions\FacebookSDKException
     */
    public function __construct()
    {
        $appSecret = env('FACEBOOK_APP_SECRET_' . strtoupper(environment()));
        $this->fb = new Facebook([
            'app_id' => env('FACEBOOK_APP_ID_' . strtoupper(environment())),
            'app_secret' => $appSecret,
            'default_graph_version' => self::DEFAULT_GRAPH_API_VERSION,
        ]);
        $this->accessToken = $this->fb->getApp()->getAccessToken();
    }

    /**
     * Update user dispute
     *
     * @param $transactionID
     * @param $reason
     * @return \Facebook\FacebookResponse
     * @throws \Facebook\Exceptions\FacebookSDKException
     */
    public function updateDispute($transactionID, $reason) {
        return $this->fb->post('/' . $transactionID . '/dispute', [
            'reason' => $reason,
        ], $this->accessToken);
    }

    /**
     * Refund payment
     *
     * @param $transactionID
     * @param $reason
     * @param $amount
     * @param $currency
     * @return \Facebook\FacebookResponse
     * @throws \Facebook\Exceptions\FacebookSDKException
     */
    public function refundPayment($transactionID, $reason, $amount, $currency) {
        return $this->fb->post('/' . $transactionID . '/refunds', [
            'currency' => $currency,
            'amount'   => $amount,
            'reason'   => $reason ?? '',
        ], $this->accessToken);
    }

    /**
     * @param $transactionID
     * @return \Facebook\FacebookResponse
     * @throws \Facebook\Exceptions\FacebookSDKException
     */
    public function getTransaction($transactionID)
    {
        return $this->fb->get('/' . $transactionID . '?fields=actions,refundable_amount,disputes', $this->accessToken);
    }
}