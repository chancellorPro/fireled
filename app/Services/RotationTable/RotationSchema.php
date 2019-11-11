<?php

namespace App\Services\RotationTable;


use App\Services\RotationTable\Contracts\RotationTableModel;
use Illuminate\Support\Facades\Schema;

class RotationSchema
{
    /**
     * Apply changes to each table
     *
     * @param RotationTableModel $rotationTableModel Table with rotation info
     * @param string $table                          Table name
     * @param \Closure $callback                     Callback with changes
     */
    public static function table(RotationTableModel $rotationTableModel, string $table, \Closure $callback)
    {
        $tables = $rotationTableModel->getExistsTables($table);
        $tables[] = $table;

        foreach ($tables as $tableName) {
            Schema::table($tableName, $callback);
        }
    }
}