@extends('layouts.app')

@section('main_container')
    <div class="right_col">
        <div>
            <div class="page-title">
                <div class="title_left">
                    @if (isset($title))
                        <h3>@lang($title)</h3>
                    @endif
                </div>
                <div class="title_right">
                </div>
            </div>
            <div class="clearfix"></div>

            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">

                    <div class="x_panel">
                        <div class="x_content">
                            {{--TODO: Delete after stop using. Tabs used instead--}}
                            @if (!empty($menu))
                                <ul class="menu">
                                    @foreach ($menu as $item)
                                        @if (isset($item['route']) && isset($item['name']))
                                            @php
                                                $routeParams = $item['route_params'] ?? [];
                                            @endphp
                                            <li{{ (Route::currentRouteName() == $item['route'] ? ' class=active' : '') }}>
                                                <a href="{{ route($item['route'], $routeParams) }}">@lang($item['name'])</a>
                                            </li>
                                        @endif
                                    @endforeach
                                </ul>
                            @endif

                            @yield('controls')
                            @if (isset($data) and isset($filter))
                                @include('common.paginate', ['data' => $data, 'filter' => $filter])
                            @endif

                            @yield('content')

                            @if (isset($data) and isset($filter))
                                @include('common.paginate', ['data' => $data, 'filter' => $filter])
                            @endif
                            @yield('controls')

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
@endsection
