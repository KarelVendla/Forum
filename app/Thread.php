<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    public function owner() 
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function channel() 
    {
        return $this->belongsTo(Channel::class);
    }

    public function getJWITdentifier() {}
}
