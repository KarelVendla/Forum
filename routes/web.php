<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
});

Route::get('/threads/{channel}/{id}', function () {
    return view('layouts.app');
});

Route::get('/create', function () {
    return view('layouts.app');
});

Route::get('/threads/{channel}', function () {
    return view('layouts.app');
});

Route::get('/threads', function () {
    return view('layouts.app');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
