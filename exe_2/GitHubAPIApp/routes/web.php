<?php

use App\Http\Controllers\GitHubController;
use Illuminate\Support\Facades\Route;

Route::get(
    '/',
    [GitHubController::class, 'index']
)->name('github.index');
