<div @class([ 'flex items-center justify-center min-h-screen filament-login-page bg-gray-100 text-gray-900'
    , 'dark:bg-gray-900 dark:text-white'=> config('filament.dark_mode'),
    ])>
    <div class="w-screen max-w-md px-6 -mt-16 space-y-8 md:mt-0 md:px-2">
        <form wire:submit.prevent="authenticate"
            @class([ 'p-8 w-full max-w-xl space-y-8 bg-white/50 border border-gray-200 shadow rounded-2xl relative'
            , 'dark:bg-gray-900/50 dark:border-gray-700'=> config('filament.dark_mode'),
            ])>

            <div class="flex">
                <a href="{{ route('home') }}" class="w-full text-2xl font-bold tracking-tight text-center">هنرستان شهید چمران</a>
            </div>

            {{ $this->form }}

            <x-filament::button type="submit" form="authenticate" class="w-full">
                {{ __('filament::login.buttons.submit.label') }}
            </x-filament::button>
        </form>
    </div>
</div>