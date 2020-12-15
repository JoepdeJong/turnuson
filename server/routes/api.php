<?php

use App\Http\Controllers\VisitorController;
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

Route::get('/total', [VisitorController::class, 'total']);
Route::post('/register', [VisitorController::class, 'register']);
Route::post('/confirm', [VisitorController::class, 'confirm']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
