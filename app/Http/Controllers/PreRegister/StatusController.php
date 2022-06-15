<?php

namespace App\Http\Controllers\PreRegister;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function index()
    {
        return inertia('PreRegister/Status');
    }
}
