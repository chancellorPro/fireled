<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Order
 */
class Order extends Model
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
    protected $table = 'order';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'order_data',
        'total_sum',
    ];
}
