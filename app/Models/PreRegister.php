<?php

namespace App\Models;

use App\Enums\PreRegister\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreRegister extends Model
{
    use HasFactory;

    protected $casts = [
        'status' => Status::class,
    ];
}
