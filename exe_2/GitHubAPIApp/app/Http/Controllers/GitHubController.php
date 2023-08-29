<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class GitHubController extends Controller
{
    public function index()
    {
        return view('github.github-index');
    }
}
