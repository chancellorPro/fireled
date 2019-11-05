<?php

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory as EloquentFactory;

/** @var EloquentFactory $factory */
$factory->define(User::class, function (Faker $faker) {
    return [
        'email'          => $faker->unique()->userName,
        'name'   => $faker->unique()->name,
        'password'       => 'secret',
        'remember_token' => Str::random(10),
        'deleted_at'     => $faker->randomElement([null, null, null, Carbon::now()]),
    ];
});
