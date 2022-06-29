<?php

namespace App\Http\Controllers;

use App\Http\Resources\MajorResource;
use App\Models\Major;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public static function getProps()
    {
        $majors = Major::all();

        return [
            'majors' => MajorResource::collection($majors),
        ];
    }

    public function __invoke()
    {
        return inertia('Home', HomeController::getProps());
    }
}
