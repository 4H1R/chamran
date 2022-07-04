<?php

namespace App\Http\Controllers;

use App\Http\Resources\MajorResource;
use App\Models\Major;

class HomeController extends Controller
{
    public function __invoke()
    {
        $majors = Major::all();

        return inertia('Home', [
            'majors' => MajorResource::collection($majors),
        ]);
    }
}
