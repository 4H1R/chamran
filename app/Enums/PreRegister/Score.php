<?php

namespace App\Enums\PreRegister;

enum Score: int
{
    case Excellent = 4;
    case VeryGood = 3;
    case Good = 2;
    case Poor = 1;

    public function textFa(): string
    {
        return match ($this) {
            Score::Excellent => 'عالی',
            Score::VeryGood => 'خیلی خوب',
            Score::Good => 'خوب',
            Score::Poor => 'نیاز به تلاش',
        };
    }
}
