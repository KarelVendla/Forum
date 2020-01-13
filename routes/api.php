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

//ALl threads
Route::get('threads','ThreadController@index');

//Single thread
Route::get('threads/{channel}/{id}', 'ThreadController@show');

//Post thread
Route::post('thread', 'ThreadController@store');

//Post reply
Route::post('reply/{thread_id}', 'ReplyController@store');

//All replies
Route::get('replies/{thread_id}','ReplyController@index');


//Authenticated users data
Route::get('me', 'AuthController@me');


//Register
Route::post('auth/register', 'AuthController@register');

//Login
Route::post('auth/login', 'AuthController@login');

//Logout
Route::get('logout', 'AuthController@logout');

//Refresh jwt (JSON WEB TOKEN)
Route::post('refresh', 'AuthController@refresh');


//All Channels
Route::get('channels', 'ChannelController@index');

Route::get('threads/{channel}', 'ChannelController@show');
