<?php

namespace App\Services\RotationTable\Traits;

use Illuminate\Database\Eloquent\Builder;

/**
 * Rotation Table
 */
trait RotationTable
{

    /**
     * Get table name
     *
     * @return string
     */
    public function getTableName():string
    {
        return $this->table_name;
    }

    /**
     * Get table index
     *
     * @return integer
     */
    public function getTableIndex():int
    {
        return (int) $this->table_index;
    }

    /**
     * Increment table index
     */
    public function incTableIndex()
    {
        $this->table_index++;
        $this->touch();
    }

    /**
     * Get table max size
     *
     * @return integer
     */
    public function getTableMaxSize():int
    {
        return (int) $this->table_max_size;
    }

    /**
     * Table history depth
     *
     * @return integer
     */
    public function getTableHistoryDepth():int
    {
        return (int) $this->table_history_depth;
    }

    /**
     * Table actives depth
     *
     * @return integer
     */
    public function getTableActivesDepth():int
    {
        return (int) $this->table_actives_depth;
    }

    /**
     * Combine data from the all rotations
     *
     * @param Builder $builder QueryBuilder
     * @param bool $fullSearch
     *
     * @return mixed
     */
    public static function combine(Builder $builder, $fullSearch = false)
    {
        $rotation = self::findOrFail($builder->getModel()->getTable());
        $tableIndex = $rotation->getTableIndex();
        $tableIndexDepth = $rotation->getTableIndex() - $rotation->getTableActivesDepth();

        $builders = [];
        while ($tableIndex && ($tableIndex > $tableIndexDepth || $fullSearch)) {
            $newBuilder = clone $builder;

            $newBuilder->from($rotation->getTableNameByIndex($tableIndex));

            $builders[] = $newBuilder;

            $tableIndex--;
        }

        $resultBuilder = array_shift($builders);
        foreach ($builders as $item) {
            $resultBuilder->union($item);
        }

        $query = $builder->getModel()->newQuery();

        $query->from(\DB::raw("(" . $resultBuilder->toSql() . ") as r"));
        $query->setBindings($resultBuilder->getBindings());
        $query->setEagerLoads($builder->getEagerLoads());

        return $query;
    }

    /**
     * Get rotation table name
     *
     * @param string $name Name
     * @param string $conn Connection
     * @return mixed
     */
    public static function getRotationTableName($name, $conn = '')
    {
        $rotation = self::getRotationTableInfo($name, $conn);

        $tableIndex = $rotation->getTableIndex();

        return $rotation->getTableNameByIndex($tableIndex);
    }

    /**
     * Get rotation table info
     *
     * @param $name
     * @param string $conn
     * @return \Illuminate\Database\Eloquent\Collection|mixed
     */
    public static function getRotationTableInfo($name, $conn = '')
    {
        if($conn) {
            $rotation = self::on($conn)->findOrFail($name);
        } else {
            $rotation = self::findOrFail($name);
        }

        return $rotation;
    }

    /**
     * Get exists tables
     *
     * @param string $table Table name
     *
     * @return array
     */
    public function getExistsTables(string $table):array
    {
        $rotation = self::on(self::connection())->findOrFail($table);

        $min = $rotation->getTableIndex();
        $max = $min + 1;
        $deph = $rotation->getTableHistoryDepth();

        if ($min > 1) {
            $min = $max - $deph > 1 ? $max - $deph : 1;
        }

        $result = [];
        for ($i = $min; $i <= $max; $i++) {
            $result[] = $rotation->getTableNameByIndex($i);
        }
        return $result;
    }
}
