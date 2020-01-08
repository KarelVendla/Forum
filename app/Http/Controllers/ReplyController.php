<?php

namespace App\Http\Controllers;


use App\Reply;
use App\Thread;
use Illuminate\Http\Request;
use App\Http\Resources\Reply as ReplyResource;
use Illuminate\Support\Facades\Auth;

class ReplyController extends Controller
{

    public function __construct()
    {
    $this->middleware('auth', ['only' => ['create', 'store', 'edit', 'delete']]);
    }

    public function index($thread_id)
    {
        $replies = Reply::all()->where('thread_id', $thread_id);

        return ReplyResource::collection($replies);
    }

    public function store(Thread $thread)
    {

        $thread->addReply([
            'body' => request('body'),
            'user_id' => auth()->id()
        ]);
    }
}
