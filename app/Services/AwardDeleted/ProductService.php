<?php

namespace App\Services\AwardDeleted;

use App\Models\Cms\Product;
use App\Services\AwardDeleted\Builder\AwardDeletedParamsBuilder;

class ProductService
{
    /**
     * Handle the event.
     *
     * @param AwardDeletedParamsBuilder $builder
     * @return void
     */
    public function handle(AwardDeletedParamsBuilder $builder)
    {
            $product = Product::where(['award_id' => $builder->getAwardId()])->first();
            $product->update(['award_id' => null]);
    }
}
