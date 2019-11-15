<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * Class Basket
 */
class Basket extends Model
{

    /**
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'basket';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'product_id',
        'count',
    ];

    /**
     * product relation
     *
     * @return HasOne
     */
    public function product()
    {
        return $this->hasOne(Product::class, 'id', 'product_id');
    }
}
