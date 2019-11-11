<?php

namespace App\Services\RotationTable;

use App\Exceptions\RotationTable\TableNotFoundException;
use App\Exceptions\ConfigServer\UrlNotFoundException;
use App\Services\ConfigServerService;
use App\Services\RotationTable\Contracts\RotationTableModel;
use DB;
use Schema;
use Log;

/**
 * Table Rotation
 */
class Rotation
{

    /**
     * Run rotating
     *
     * @param RotationTableModel $rotationTables Model of rotation
     *
     * @throws TableNotFoundException
     * @throws UrlNotFoundException
     */
    public static function run(RotationTableModel $rotationTables)
    {
        $tables = $rotationTables->all();
        if (empty($tables[0])) {
            throw new TableNotFoundException();
        }

        $con = $tables[0]->getConnection()->getName();
        $db  = DB::connection($con);

        $needPush = false;

        /**
         * Checking each table
         */
        foreach ($tables as $table) {
            /**
             * if current table does not exist - create current and next tables
             */
            if (!Schema::connection($con)->hasTable($table->getCurrentTableName())) {
                $needPush = true;

                $db->statement('CREATE TABLE ' . $table->getCurrentTableName() . ' LIKE ' . $table->getTableName());
                $db->statement('CREATE TABLE ' . $table->getNextTableName() . ' LIKE ' . $table->getTableName());

                Log::info('Table ' . $table->getCurrentTableName() . ' and ' . $table->getNextTableName() . ' were created');
            } else {
                $count = $db->table($table->getCurrentTableName())->count();

                /**
                 * If the rows counter in the table is more the limit
                 */
                if ($count >= $table->getTableMaxSize()) {
                    $needPush = true;
                    $table->incTableIndex();

                    Log::info('Current table is ' . $table->getCurrentTableName());

                    $db->statement('CREATE TABLE ' . $table->getNextTableName() . ' LIKE ' . $table->getTableName());

                    Log::info('Table ' . $table->getNextTableName() . ' was created');

                    /**
                     * If the table for deleting exists
                     */
                    if (Schema::connection($con)->hasTable($table->getWastedTableName())) {
                        $db->statement('DROP TABLE ' . $table->getWastedTableName());

                        Log::info('Table ' . $table->getWastedTableName() . ' was deleted');
                    }
                }
            }
        }

        /**
         * Push to API (Config Server)
         */
        if ($needPush) {
            (new ConfigServerService(environment()))->statsDbUpdated();
        }
    }
}
