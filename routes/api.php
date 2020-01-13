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

//All replies
Route::get('replies/{thread_id}','ReplyController@index');

//Single thread
Route::get('threads/{id}', 'ThreadController@show');

//Authenticated users data
Route::get('me', 'AuthController@me');

//Post reply
Route::post('reply/{thread_id}', 'ReplyController@store');

//Post thread
Route::post('thread', 'ThreadController@store');

//Register
Route::post('auth/register', 'AuthController@register');

//Login
Route::post('auth/login', 'AuthController@login');

//Logout
Route::get('logout', 'AuthController@logout');

//Refresh jwt (JSON WEB TOKEN)
Route::post('refresh', 'AuthController@refresh');