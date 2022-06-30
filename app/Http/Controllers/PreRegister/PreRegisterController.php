<?php

namespace App\Http\Controllers\PreRegister;

use App\Http\Controllers\Controller;
use App\Http\Resources\MajorResource;
use App\Models\Major;
use App\Models\PreRegister;
use Illuminate\Http\Request;

class PreRegisterController extends Controller
{
    public function index()
    {
        $majors = Major::all();
        return inertia('PreRegister', [
            'majors' => MajorResource::collection($majors),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|min:2|max:255',
            'last_name' => 'required|min:2|max:255',
            'father_name' => 'required|min:2|max:255',
            'national_code' => 'required|digits:10|unique:pre_registers',
            'mobile' => ['required', 'regex:/^09[0|1|2|3][0-9]{8}$/'],
            'phone' => ['required', 'regex:/^0[0-9]{2,}[0-9]{7,}$/'],
            'address' => 'required|min:5|max:255',
            'major_id' => 'required|exists:majors,id',
            'seventh_math' => 'required|numeric|min:5|max:20',
            'eighth_math' => 'required|numeric|min:5|max:20',
            'ninth_math' => 'required|numeric|min:5|max:20',
            'seventh_science' => 'required|numeric|min:5|max:20',
            'eighth_science' => 'required|numeric|min:5|max:20',
            'ninth_science' => 'required|numeric|min:5|max:20',
            'seventh_grade' => 'required|numeric|min:5|max:20',
            'eighth_grade' => 'required|numeric|min:5|max:20',
            'ninth_grade' => 'required|numeric|min:5|max:20',
            'seventh_discipline' => 'required|numeric|min:1|max:5',
            'eighth_discipline' => 'required|numeric|min:1|max:5',
            'ninth_discipline' => 'required|numeric|min:1|max:5',
        ]);

        PreRegister::create($validated);

        return redirect()->back();
    }
}
