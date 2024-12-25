<?php

use App\Http\Controllers\UserController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    sleep(2);
    return inertia('Home');
});

Route::inertia('/about','About');

Route::get('/users',[UserController::class, 'index']);
Route::resource('users', UserController::class)->except('index');
