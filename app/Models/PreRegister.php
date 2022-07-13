<?php

namespace App\Models;

use App\Enums\PreRegister\Score;
use App\Enums\PreRegister\Status;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PreRegister extends Model
{
    use HasFactory;

    protected $casts = [
        'status' => Status::class,
        'seventh_discipline' => Score::class,
        'eighth_discipline' => Score::class,
        'ninth_discipline' => Score::class,
    ];

    public function major()
    {
        return $this->belongsTo(Major::class);
    }

    public function secondMajor()
    {
        return $this->belongsTo(Major::class, 'second_major_id');
    }

    public function thirdMajor()
    {
        return $this->belongsTo(Major::class, 'third_major_id');
    }

    public function acceptedMajor()
    {
        return $this->belongsTo(Major::class, 'accepted_major_id');
    }
}
