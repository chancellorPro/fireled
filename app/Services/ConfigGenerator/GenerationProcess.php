<?php

namespace App\Services\ConfigGenerator;


use Illuminate\Support\Facades\Redis;

class GenerationProcess
{
    private static $items = [];

    /**
     * Put item to message
     *
     * @param string $item
     */
    public static function put(string $item)
    {
        array_unshift(self::$items, $item);
        self::set(implode(PHP_EOL, self::$items));
    }

    /**
     * Write completed message
     */
    public static function completed()
    {
        self::set('Last update: ' . toPacificTime(now()));
    }

    /**
     * Write fail message
     *
     * @param \Exception $e
     */
    public static function fail(\Exception $e)
    {
        self::put('Error: ' . $e->getMessage());
    }

    /**
     * Get value from redis
     *
     * @return mixed
     */
    public static function get()
    {
        return Redis::get(self::getRedisKey());
    }

    /**
     * Set value to redis
     *
     * @param string $value
     */
    private static function set(string $value)
    {
        Redis::set(self::getRedisKey(), $value);
    }

    /**
     * Get redis key
     *
     * @return string
     */
    private static function getRedisKey():string
    {
        return 'config:' . environment() . ':generate';
    }
}