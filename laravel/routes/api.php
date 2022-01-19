<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\RoleController;
use App\Http\Middleware\JwtMiddleware;
use SebastianBergmann\Environment\Console;

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

Route::post("login",[AccountController::class, 'login']);

Route::get("users",[AccountController::class, 'fetchdata']);

Route::put("update/{staff_id}", [AccountController::class, 'modify']);

Route::delete("delete/{staff_id}",[AccountController::class,'remove']);

Route::post("check", [AccountController::class, 'check']);

Route::post("/logout", [AccountController::class, 'logout']);

Route::get("search",[RoleController::class, 'search']);
//Route::get("search",[RoleController::class,'search']);


Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post("/staff-create", [RoleController::class, 'staffCreate']);
    Route::post("/staff-save/{id}", [RoleController::class,'staffSave']);
    Route::post("/supervisor-add/{id}", [RoleController::class, 'supervisorAdd']);
    Route::post("/doctor", [RoleController::class, 'doctor']);
    Route::get("/getReports", [RoleController::class, 'getReportbyId']);
});

// Route::post("/staff-create", [RoleController::class, 'staffCreate']);
// Route::post("/staff-save/{id}", [RoleController::class,'staffSave']);
//Route::post("/supervisor-add/{id}", [RoleController::class, 'supervisorAdd']);