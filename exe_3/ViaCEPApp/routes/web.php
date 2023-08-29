<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CEPController;

Route::get(
    '/',
    [CEPController::class, 'index']
)->name('cep.index');
