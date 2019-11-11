<?php

namespace App\Models;

use App\Models\ProductFile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
        'description',
    ];

    /**
     * CmsAdpFile relation
     *
     * @return HasMany
     */
    public function productFiles()
    {
        return $this->hasMany(ProductFile::class);
    }

}
