<?php

namespace App\Services\ConfigGenerator\Generators\Asset;

use App\Models\Cms\Asset;

/**
 * Collection assets
 */
class AssetsCollection extends Assets
{

    /**
     * Get asset type
     *
     * @return integer
     */
    protected function getAssetType(): int
    {
        return Asset::ASSET_TYPE_COLLECTION_ITEM;
    }
}
