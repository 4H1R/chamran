<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{AboutUsController, ContactUsController, HomeController};
use App\Http\Controllers\PreRegister\{PreRegisterController, StatusController};

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

Route::get('/', HomeController::class)->name('home');
Route::get('/about-us', AboutUsController::class)->name('about');

Route::get('/pre-register', [PreRegisterController::class, 'index'])->name('pre-register');
Route::post('/pre-register', [PreRegisterController::class, 'store']);
Route::get('/pre-register/status', [StatusController::class, 'index'])->name('pre-register.status');
Route::post('/pre-register/status', [StatusController::class, 'store']);

Route::post('/logout', function () {
    auth()->logout();
    return redirect('/');
})->name('auth.logout');
