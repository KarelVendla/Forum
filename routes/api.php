<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Auth::routes();

//Get all threads
Route::get('threads','ThreadController@index');

//Get all replies based on thread id
Route::get('replies/{thread_id}','ReplyController@index');

//Get single thread
Route::get('threads/{id}', 'ThreadController@show');

//Post a reply
Route::post('replies/{thread_id}', 'ReplyController@store');