<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
        'status',
    ];

    /**
     * user relation
     *
     * @return HasOne
     */
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
