<?php

use App\Http\Controllers\AccountController;
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

//Route::get('/', [AccountController::class, 'index'])->name('home');
Route::get('/fetch-data', [AccountController::class, 'fetchdata']);
Route::get('/login', [AccountController::class, 'home']);
Route::get('/home',[AccountController::class, 'login']);


// Route::get('display-data','App\Http\Controllers\RoleController@displaydata');
