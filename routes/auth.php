<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::name('auth.')->group(function () {
    Route::post('/logout', [AuthController::class, 'destroy'])->name('logout');
});
