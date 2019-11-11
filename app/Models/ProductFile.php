<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Services\FileService;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * CmsAdpFile
 *
 * @property int $id
 * @property int $product_id
 * @property string $name
 * @property string $url
 * @property integer $type
 * @property string $created_at
 * @property Product $product
 */
class ProductFile extends Model
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'product_id',
        'name',
        'url',
        'type',
        'created_at',
        'file_hash'
    ];

    /**
     * CmsAdp relation
     *
     * @return BelongsTo
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * Scope a query to only include files of a given type.
     *
     * @param Builder $query Query
     * @param mixed   $type  Type
     *
     * @return Builder
     */
    public function scopeOfType(Builder $query, $type)
    {
        if (is_array($type)) {
            $builder = $query->whereIn('type', $type);
        } else {
            $builder = $query->where('type', $type);
        }

        return $builder;
    }

    /**
     * Delete
     *
     * @return boolean|null|void
     * @throws \Exception Can't delete
     */
    public function delete()
    {
        FileService::delete($this->url);
        parent::delete();
    }
}
