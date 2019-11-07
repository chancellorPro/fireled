<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Product
 */
class Product extends Model
{

    /**
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'box_id',
        'box_size',
        'box_weight',
        'parent_product',
    ];

    /**
     * Product relation
     *
     * @return BelongsTo
     */
    public function product_ref()
    {
        return $this->belongsTo(Product::class, 'parent_product');
    }

    /**
     * Product relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function childProducts()
    {
        return $this->hasMany(Product::class, 'parent_product', 'id');
    }

}
