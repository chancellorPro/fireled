<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Color
 */
class Color extends Model
{
    /**
     * @var bool
     */
    public $timestamps = false;

    /**
     * @var string
     */
    protected $table = 'color';

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
    ];
}
