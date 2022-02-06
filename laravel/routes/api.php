<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\horController;
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


Route::get("search",[RoleController::class, 'search']);
//Route::get("search",[RoleController::class,'search']);

Route::get("display-data",[RoleController::class,'displaydata']);

Route::get("report/{horNum}", [horController::class, 'getReportByHorNum']);

Route::get('/showreports',[horController::class, 'showreports']);

Route::get("getnames",[RoleController::class,'getNamesByRole']);
Route::post("/void/{horNum}",[RoleController::class, 'voidReport']);

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post("/logout", [AccountController::class, 'logout']);
    Route::post("/staff-create", [RoleController::class, 'staffCreate']);
    Route::post("/staff-save/{id}", [RoleController::class,'staffSave']);
    Route::post("/supervisor-add/{id}", [RoleController::class, 'supervisorAdd']);
    Route::post("/doctor-add/{id}", [RoleController::class, 'doctorAdd']);
    Route::get("/getReports", [horController::class, 'getReports']);
    Route::post("/returnReport/{id}",[horController::class, 'returnReport']);
    Route::get('/showreports/user',[horController::class, 'showreportsbyuser']);
    Route::delete("delete/{horNum}",[horController::class,'removeReport']);
});

// Route::post("/staff-create", [RoleController::class, 'staffCreate']);
// Route::post("/staff-save/{id}", [RoleController::class,'staffSave']);
//Route::post("/supervisor-add/{id}", [RoleController::class, 'supervisorAdd']);