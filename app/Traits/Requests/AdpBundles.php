<?php

namespace App\Traits\Requests;

/**
 * Get bundles
 */
trait AdpBundles
{

    /**
     * Get asset bundles
     *
     * @return array
     */
    public function getBundles():array
    {
        $result = [];

        /**
         * For WebGl
         */
        if ($this->has('compressed')) {
            $result['compressed'] = $this->file('compressed');
        }
        if ($this->has('uncompressed')) {
            $result['uncompressed'] = $this->file('uncompressed');
        }
        /**
         * For Android
         */
        if ($this->has('android_compressed')) {
            $result['android_compressed'] = $this->file('android_compressed');
        }
        if ($this->has('android_uncompressed')) {
            $result['android_uncompressed'] = $this->file('android_uncompressed');
        }
        /**
         * For ios
         */
        if ($this->has('ios_compressed')) {
            $result['ios_compressed'] = $this->file('ios_compressed');
        }
        if ($this->has('ios_uncompressed')) {
            $result['ios_uncompressed'] = $this->file('ios_uncompressed');
        }

        return $result;
    }
}
