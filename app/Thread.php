<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    public function owner() 
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function getJWITdentifier() {}
}
