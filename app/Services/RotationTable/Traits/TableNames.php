<?php

namespace App\Services\RotationTable\Traits;

/**
 * TableNames
 *
 * Trait for model of rotation table
 */
trait TableNames
{

    /**
     * Table name format
     *
     * @return string
     */
    public function getTableNameFormat(): string
    {
        return '%s_%05d';
    }

    /**
     * Get table name by index
     *
     * @param integer $index Index
     *
     * @return string
     */
    public function getTableNameByIndex(int $index): string
    {
        return sprintf($this->getTableNameFormat(), $this->getTableName(), $index);
    }

    /**
     * Get current table name
     *
     * @return string
     */
    public function getCurrentTableName(): string
    {
        return $this->getTableNameByIndex($this->getTableIndex());
    }

    /**
     * Get next table name
     *
     * @return string
     */
    public function getNextTableName(): string
    {
        return $this->getTableNameByIndex($this->getTableIndex() + 1);
    }

    /**
     * Get table name to deleting
     *
     * @return string
     */
    public function getWastedTableName(): string
    {
        return $this->getTableNameByIndex($this->getTableIndex() - $this->getTableHistoryDepth());
    }
}
