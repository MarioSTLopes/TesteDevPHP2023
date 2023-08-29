<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CEPController extends Controller
{
    public function index()
    {
        return view('cep.cep-index');
    }
}
