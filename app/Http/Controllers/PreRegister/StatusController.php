<?php

namespace App\Http\Controllers\PreRegister;

use App\Http\Controllers\Controller;
use App\Models\PreRegister;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'national_code' => 'required|digits:10|exists:pre_registers',
        ]);

        $result = PreRegister::query()
            ->where('national_code', $validated['national_code'])
            ->first();

        return redirect()->back()->with('data', [
            'status' => $result->status->textEn(),
            'full_name' => "{$result->first_name} {$result->last_name}",
        ]);
    }
}
