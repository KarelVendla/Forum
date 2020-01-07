<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    public function owner() 
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function replies() 
    {
        return $this->hasMany(Reply::class);
    }

    public function addReply($reply) 
    {
        $this->replies()->create($reply);
    }
}
