<?php

namespace App\Traits\Relations;


use App\Models\User\User;

trait HasOneUser
{

    /**
     * User relation
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}