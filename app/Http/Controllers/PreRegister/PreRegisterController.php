<?php

namespace App\Http\Controllers\PreRegister;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PreRegisterController extends Controller
{
    public function index()
    {
        return inertia('PreRegister/Index');
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|min:2|max:255',
            'last_name' => 'required|min:2|max:255',
            'father_name' => 'required|min:2|max:255',
            'national_code' => 'required|min:10|max:10',
            'mobile' => 'required|min:11|max:11',
            'phone' => 'required|min:11|max:11',
            'address' => 'required|min:5|max:255',
        ]);
    }
}
