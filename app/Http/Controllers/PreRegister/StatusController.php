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

    public function store(Request $request)
    {
        $request->validate([
            'national_code' => 'required|digits:10',
        ]);
    }
}
