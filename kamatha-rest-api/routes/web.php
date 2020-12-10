<?php

use App\Models\Post;
use Illuminate\Support\Facades\Route;

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
use  App\Models\Thread;


Route::get('/', function () {

    $post = Post::find(1);
    //var_dump($post->thread);



    $thread = Thread::find(4);
    foreach ($thread->posts as $post){
        var_dump($post->id);
    }

    //return view('welcome');
});


Route::get('/ajax', function () {
    return view('ajaxtest');
});



