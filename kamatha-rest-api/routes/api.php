<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ThreadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/sw', function () {
    return '2222';
});



//code for rest api version 1.0  url= /api/v1/[]
 Route::group(['prefix' => 'v1'], function() {
     Route::get('/', function () {
         dd('3333');
     });

     Route::get('/rr', function () {
         dd('2222');
     });
     //Route::get('/users', [UserController::class, 'index']);

     //Route::resource('categories', CategoryController::class);
     Route::resource('categories', CategoryController::class,[
         'except' => ['create','edit']
     ]);

     Route::resource('threads', ThreadController::class,[
         'except' => ['create','edit']
     ]);

//     Route::resource('photos', PhotoController::class)->only([
//         'index', 'show'
//     ]);
//
//     Route::resource('photos', PhotoController::class)->except([
//         'create', 'store', 'update', 'destroy'
//     ]);



//     Route::post('user', [
//         'uses' => 'AuthController@store'
//     ]);

//     Route::post('user/signin', [
//         'uses' => 'AuthController@signin'
//     ]);



});





