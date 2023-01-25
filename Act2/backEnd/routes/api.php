<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\bandcontroller;
use App\Http\Controllers\usercontroller;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('bands', [bandController::class, 'getBands']);

Route::get('search', [bandController::class, 'search']);

Route::get('band/{id}', [bandController::class, 'getBandId']);

Route::get('users', [usercontroller::class, 'getUsers']);

Route::post('addUser', [usercontroller::class, 'addUser']);

Route::post('loginComplete', [usercontroller::class, 'loginComplete']);