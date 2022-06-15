<?php

namespace App\Http\Controllers\PreRegister;

use App\Http\Controllers\Controller;
use App\Http\Resources\MajorResource;
use App\Models\Major;
use Illuminate\Http\Request;

class PreRegisterController extends Controller
{
    public function index()
    {
        $majors = Major::all();
        return inertia('PreRegister/Index', [
            'majors' => MajorResource::collection($majors),
        ]);
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
            'major_id' => 'required|exists:majors,id',
            'seventh_math' => 'required|numeric|min:5|max:20',
            'eighth_math' => 'required|numeric|min:5|max:20',
            'ninth_math' => 'required|numeric|min:5|max:20',
            'seventh_science' => 'required|numeric|min:5|max:20',
            'eighth_science' => 'required|numeric|min:5|max:20',
            'ninth_science' => 'required|numeric|min:5|max:20',
            'seventh_discipline' => 'required|numeric|min:5|max:20',
            'eighth_discipline' => 'required|numeric|min:5|max:20',
            'ninth_discipline' => 'required|numeric|min:5|max:20',
        ]);
    }
}
