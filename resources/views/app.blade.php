<!DOCTYPE html>
<html lang="fa" dir="rtl" class="scroll-smooth">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <meta data-rh="true" name="description" content="هنرستان شهید چمران" />

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    <!-- Scripts -->
    {{-- @routes --}}
    <script src="{{ mix('js/app.js') }}" defer></script>
    @inertiaHead
</head>

<body class="overflow-x-hidden font-sans antialiased bg-secondary-50 text-secondary-900">
    @inertia
</body>

</html>