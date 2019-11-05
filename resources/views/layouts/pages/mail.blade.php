<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <style>
        table {
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid black;
            padding: 5px;
        }
    </style>
</head>
<body>
<div class="container body">
    <div class="main_container">
        @if(empty($hide_button))
            {{-- Send report --}}
            @include('common.buttons.save', [
                'route' => 'send',
                'id' => 'send',
                'route_params' => [
                    'has_parent' => false,
                    'orderType' => $orderType,
                    'dateFrom' => $dateFrom,
                    'dateTo' => $dateTo,
                    'direction' => $direction,
                    'template' => $template,
                ],
                'name' => __('Send report'),
                'fa_class' => 'fa-save',
                'class' => 'reports',
                'dataset' => [
                    'method' => 'GET',
                ],
            ])
            <br><br>
        @endif
        @yield('main_container')
    </div>
</div>
</body>
</html>
