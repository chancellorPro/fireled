<?php

namespace App\Traits;

/**
 * Trait PetIdConvertTrait
 */
trait PetIdConvertTrait
{

    private $ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    /**
     * Convert petID to UserID Method
     *
     * @param $petID
     * @return string
     */
    function userIdDecode($petID) {
        $petID = (string)$petID;
        $MULTIPLIER = count($this->ALPHABET);

        if (strlen($petID) > 1) {
            $a = $petID[0];
            $b = $petID[1];
            $userID = substr($petID, 2, strlen($petID) - 2);
            $part_B = array_search(strtoupper($b), $this->ALPHABET);
            $part_A = array_search(strtoupper($a), $this->ALPHABET);
            $userID = ($userID * $MULTIPLIER * $MULTIPLIER) + ($part_B * $MULTIPLIER) + $part_A;
        } else {
            $userID = array_search($petID, $this->ALPHABET);
        }

        return $userID;
    }

    /**
     * Convert UserID to petID Method
     *
     * @param $petID
     * @return string
     */
    function userIdEncode($petID) {
        $copiedID = (int)$petID;
        $MULTIPLIER = count($this->ALPHABET);

        $aIndex = $copiedID % $MULTIPLIER;
        $part_A = strtolower($this->ALPHABET[$aIndex]);
        $copiedID /= $MULTIPLIER;
        $bIndex = $copiedID % $MULTIPLIER;
        $part_B = strtolower($this->ALPHABET[$bIndex]);
        $copiedID /= $MULTIPLIER;

        return $part_A . $part_B . (int)$copiedID;
    }

}
