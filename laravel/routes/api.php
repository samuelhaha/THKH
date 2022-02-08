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

// Route::post("login",[AccountController::class, 'login']);

// Route::get("users",[AccountController::class, 'fetchdata']);

// Route::put("update/{staff_id}", [AccountController::class, 'modify']);

// Route::delete("delete/{staff_id}",[AccountController::class,'remove']);

Route::post("check", [AccountController::class, 'check']); //login


Route::get("search", [RoleController::class, 'search']);

// Route::get("display-data", [RoleController::class, 'displaydata']);

// Route::get("report/{horNum}", [horController::class, 'getReportByHorNum']);

Route::get('/showreports', [horController::class, 'showreports']);

// Route::get("getnames", [RoleController::class, 'getNamesByRole']);
Route::post("/void/{horNum}", [RoleController::class, 'voidReport']);

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::post("/logout", [AccountController::class, 'logout']);
    Route::post("/staff-create", [RoleController::class, 'staffCreate']);
    Route::post("/staff-save/{horNum}", [RoleController::class, 'staffSave']);
    Route::post("/supervisor-add/{horNum}", [RoleController::class, 'supervisorAdd']);
    Route::post("/doctor-add/{horNum}", [RoleController::class, 'doctorAdd']);
    Route::post("/pharmacy-add/{horNum}", [RoleController::class, 'pharmacyAdd']);
    Route::post("/hod-add/{horNum}", [RoleController::class, 'hodAdd']);
    Route::post("/hpo-add/{horNum}", [RoleController::class, 'hpoAdd']);
    Route::post("/dms-add/{horNum}", [RoleController::class, 'dmsAdd']);
    Route::get("/getReports", [horController::class, 'getReports']);
    Route::post("/returnReport/{horNum}",[horController::class, 'returnReport']);
    Route::get('/showreports/user', [horController::class, 'showreportsbyuser']);
    Route::delete("delete/{horNum}", [horController::class, 'removeReport']);
    Route::get("report/{horNum}", [horController::class, 'getReportByHorNum']);
    Route::get("getnames", [RoleController::class, 'getNamesByRole']);
});

// Route::post("/staff-create", [RoleController::class, 'staffCreate']);
// Route::post("/staff-save/{id}", [RoleController::class,'staffSave']);
//Route::post("/supervisor-add/{id}", [RoleController::class, 'supervisorAdd']);