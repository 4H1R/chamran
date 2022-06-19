<?php

namespace App\Http\Livewire;

use Closure;
use Filament\Pages\Page;
use Livewire\Component;
use Illuminate\Support\Facades\Route;

class Dashboard extends Page
{
    protected static string $view = 'livewire.dashboard';

    protected static ?string $navigationIcon = 'heroicon-o-home';

    protected static function getNavigationLabel(): string
    {
        return static::$navigationLabel ?? static::$title ?? __('filament::pages/dashboard.title');
    }

    public static function getRoutes(): Closure
    {
        return function () {
            Route::get('/', static::class)->name(static::getSlug());
        };
    }

    protected function getTitle(): string
    {
        return static::$title ?? __('filament::pages/dashboard.title');
    }
}
