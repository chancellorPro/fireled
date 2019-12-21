<?php

namespace App\Models;

use App\Models\ProductFile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
        'price',
        'first_color',
        'second_color',
        'description',
    ];

    /**
     * productFiles relation
     *
     * @return HasMany
     */
    public function productFiles()
    {
        return $this->hasMany(ProductFile::class);
    }


    /**
     * firstColor
     *
     * @return HasOne
     */
    public function firstColor()
    {
        return $this->hasOne(Color::class, 'id', 'first_color');
    }

    /**
     * secondColor
     *
     * @return HasOne
     */
    public function secondColor()
    {
        return $this->hasOne(Color::class, 'id', 'second_color');
    }

}
