<?php

namespace App\Services\RotationTable\Contracts;

/**
 * Rotation interface for a Model class
 */
interface RotationTableModel
{

    /**
     * Get name of base table
     *
     * @return string
     */
    public function getTableName():string;

    /**
     * Get current table name
     *
     * @return string
     */
    public function getCurrentTableName():string;

    /**
     * Get next table name
     *
     * @return string
     */
    public function getNextTableName():string;

    /**
     * Get table name to deleting
     *
     * @return string
     */
    public function getWastedTableName():string;

    /**
     * Get current table index
     *
     * @return integer
     */
    public function getTableIndex():int;

    /**
     * Increment table index
     *
     * @return mixed
     */
    public function incTableIndex();

    /**
     * Get table max size
     *
     * How many rows will contain the table
     *
     * @return integer
     */
    public function getTableMaxSize():int;

    /**
     * Get Table History Depth
     *
     * How many tables need to keep before deleting
     *
     * @return integer
     */
    public function getTableHistoryDepth():int;

    /**
     * Get Table Actives Depth
     *
     * How many tables need to be active
     *
     * @return integer
     */
    public function getTableActivesDepth():int;

    /**
     * Get exists tables
     *
     * @param string $table Table name
     *
     * @return array
     */
    public function getExistsTables(string $table):array;
}
