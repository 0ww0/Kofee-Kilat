<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset='UTF-8'>
		<meta name='viewport' content='width=device-width, initial-scale=1.0'>
		<meta name=”robots” content="index, follow">
		<link rel='icon' type='image/x-icon' sizes='48x48' href="{{ asset('favicon.ico') }}">
		<link rel='apple-touch-icon' sizes='180x180' href="{{ asset('apple-touch-icon.png') }}">
		<title inertia>Kofe Kilat</title>
        @vite('resources/scripts/app.js')
        @inertiaHead
    </head>
    <body>
    <section class="layout" id="app" data-page="{{ json_encode($page) }}"></section>
    </body>
</html>
