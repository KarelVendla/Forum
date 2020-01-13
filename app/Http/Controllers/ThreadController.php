<?php

namespace App\Http\Controllers;

use App\Thread;
use App\Channel;
use Illuminate\Http\Request;
use App\Http\Resources\Thread as ThreadResource;

class ThreadController extends Controller
{

    public function __construct()
    {
    $this->middleware('auth', ['only' => ['store', 'edit','update', 'delete']]);
    }
    
    public function index()
    {
        $threads = Thread::orderBy('created_at', 'desc')->get();

        return ThreadResource::collection($threads);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validate = $this->validate($request, [
                    'title' => 'bail|required',
                    'channelSlug' => 'required',
                    'body' => 'required'
                 ]);

        $title = $request->title;
        $user_id = auth()->id();
        $category = $request->channelSlug;
        $channel_id = Channel::where('slug', $category)->value('id');

        $thread = new Thread();
        $thread->title = $title;
        $thread->body = $request->body;
        $thread->user_id = $user_id;
        $thread->channel_id = $channel_id;

        $thread->save();
        
        $thread_id = Thread::where('user_id', $user_id)->where('title', $title)->value('id');


        return ['thread_id' => $thread_id,
                'category' =>  $category];
    }


    public function show($id)
    {
        $thread = Thread::all()->where('id', $id);

        return ThreadResource::collection($thread);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function edit(Thread $thread)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Thread $thread)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function destroy(Thread $thread)
    {
        //
    }
}
