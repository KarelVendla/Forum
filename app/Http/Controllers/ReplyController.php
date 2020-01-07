<?php

namespace App\Http\Controllers;


use App\Reply;
use Illuminate\Http\Request;
use App\Http\Resources\Reply as ReplyResource;

class ReplyController extends Controller
{
    public function index($thread_id)
    {
        $threads = Reply::all()->where('thread_id', $thread_id);

        return ReplyResource::collection($threads);
    }
}
