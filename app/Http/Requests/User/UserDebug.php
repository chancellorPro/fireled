<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use \Illuminate\Validation\Rule;

/**
 * Class UserDebug
 */
class UserDebug extends FormRequest
{

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return boolean
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [];
        $part  = $this->route('part');

        $method = $part . 'Rules';
        
        if (method_exists($this, $method) && $part) {
            $rules = $this->{$method}();
        }
       
        return $rules;
    }

    /**
     * Get the validation rules that apply to the addAsset request.
     *
     * @return array
     */
    private function addAssetRules()
    {
        $rules = [
            'asset_ids'   => 'present|array',
            'asset_ids.*' => 'exists:assets,id',
        ];
        return $rules;
    }
    
    /**
     * Get the validation rules that apply to the addAsset request.
     *
     * @return array
     */
    private function addNeighborsRules()
    {
        $rules = [
//            'neighbor_ids.*' => 'exists:users,id,deleted_at,NULL',
        // Rule::exists('users', 'id')->whereNull('deleted_at')
        ];
        return $rules;
    }

    /**
     * Get the validation rules that apply to the addCollectible request.
     *
     * @return array
     */
    private function addCollectibleRules()
    {
        $rules = [
            'collectible_id' => 'exists:random_award_slot_collections,random_award_slot_id',
            'count' => 'required|integer',
        ];

        return $rules;
    }
    
    /**
     * Get the validation rules that apply to the addPlacement request.
     *
     * @return array
     */
    private function addPlacementRules()
    {
        $rules = [
            'count'          => 'required|integer|min:1|max:100',
            'placement_type' => 'required|integer',
        ];
        return $rules;
    }

    /**
     * Get the validation rules that apply to the pets request.
     *
     * @return array
     */
    private function petsRules()
    {
        $rules = [
            'pets.*.name'  => 'required|string|max:255',
            'pets.*.scale' => 'required|integer|max:100',
            'pets.*.color' => 'required|string|max:30',
        ];
        return $rules;
    }

    /**
     * Data preparation
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function getValidatorInstance()
    {
        $part = $this->route('part');

        $assetParts = [
            'addAsset',
            'addAssetList',
            'searchAssets',
            'searchAssetsList',
            'deleteSearchAssets',
            'moveSearchAssets'];

        if (in_array($part, $assetParts) && $this->request->has('asset_ids')) {
            $this->strToNumbers($this->request->get('asset_ids'), 'asset_ids');
        }
        
        if ($this->request->has('neighbor_ids')) {
            $this->strToNumbers($this->request->get('neighbor_ids') ?? '', 'neighbor_ids');
        }
        
        return parent::getValidatorInstance();
    }

    /**
     * Convert string to array
     *
     * @param string $str   String
     * @param string $field Field
     *
     * @return void
     */
    protected function strToNumbers(string $str, string $field)
    {
        if ($str) {
            $ids = array_filter(preg_split('/\D/', trim($str)));
       
            $this->merge([
                $field => empty($ids) ? null : $ids,
            ]);
        }
    }

    /**
     * Get resources
     *
     * @return array
     */
    public function getResources()
    {
        $result = [];
        $result_compare = [];
        foreach ($this->get("resource", []) as $resource_id => $item) {
            $result[$resource_id] = (int)$item;
        }
        foreach ($this->get("resource_compare", []) as $resource_id => $item) {
            $result_compare[$resource_id] = (int)$item;
        }

        return $result !== $result_compare ? $result : [];
    }
}
