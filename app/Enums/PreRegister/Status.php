<?php

namespace App\Enums\PreRegister;

enum Status: int
{
    case Pending = 0;
    case Approved = 1;
    case Rejected = 2;
    case Reserved = 3;

    public function textFa(): string
    {
        return match ($this) {
            Status::Pending => 'در انتظار تایید',
            Status::Approved => 'تایید شده',
            Status::Rejected => 'رد شده',
            Status::Reserved => 'رزرو شده'
        };
    }

    public function textEn(): string
    {
        return match ($this) {
            Status::Pending => 'Pending',
            Status::Approved => 'Approved',
            Status::Rejected => 'Rejected',
            Status::Reserved => 'Reserved',
        };
    }
}
