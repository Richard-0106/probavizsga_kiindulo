<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SzakdogaController;
use App\Http\Controllers\UserController;


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
    return view('szakdogak');
});
Route::get('/szakdogak',[SzakdogaController::class,'index']);
Route::post('/szakdogak',[SzakdogaController::class,'store']);
Route::delete('/szakdogak/{id}',[SzakdogaController::class,'destroy']);
Route::put('/szakdogak/{id}',[SzakdogaController::class,'update']);
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__ . '/auth.php';

require __DIR__ . '/auth.php';
