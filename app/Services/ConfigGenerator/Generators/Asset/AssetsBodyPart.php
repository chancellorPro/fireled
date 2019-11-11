<?php

namespace App\Services\ConfigGenerator\Generators\Asset;

use App\Models\Cms\Asset;

/**
 * Body parts assets
 */
class AssetsBodyPart extends Assets
{

    /**
     * Get asset type
     *
     * @return integer
     */
    protected function getAssetType(): int
    {
        return Asset::ASSET_TYPE_BODY_PART;
    }
}
