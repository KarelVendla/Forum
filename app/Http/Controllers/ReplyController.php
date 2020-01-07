<?php

namespace App\Http\Controllers;


use App\Reply;
use Illuminate\Http\Request;
use App\Http\Resources\Reply as ReplyResource;

class ReplyController extends Controller
{
    public function index($thread_id)
    {
        $replies = Reply::all()->where('thread_id', $thread_id);

        return ReplyResource::collection($replies);
    }

    public function store(Reply $reply)
    {
        $reply->addReply([
            'body' => request('body'),
            'user_id' => auth()->id()
        ]);
    }

    /*
        public function __construct()
        {
            $this->middleware('auth');  
        }
    */
}
