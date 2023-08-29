<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Laravel GitHub</title>

    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
    @yield('styles')
</head>
<body>
    <header>
        <div class="container">
            <h1>Aplicativo Laravel para API do GitHub</h1>
        </div>
    </header>

    <div class="container">
        @yield('content')
    </div>

    @yield('scripts')
</body>
</html>
