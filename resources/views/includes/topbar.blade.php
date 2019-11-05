<!-- top navigation -->
<div class="top_nav">
    <div class="nav_menu">
        <nav>
            <div class="nav toggle">
                <img src="./logo.png" style="margin: -10px 0 0 20px;height: 45px;">

            {{--<a id="menu" class="wide-lightbox" href="{{ route('menu') }}">--}}
                    {{--<i class="fa fa-cog"></i>--}}
                {{--</a>--}}
               {{--<a id="menu_toggle"><i class="fa fa-bars"></i></a>--}}
            </div>

            <div class="nav top-menu">
                @foreach(config('menu') as $menuItem)
                    @if (isset($menuItem['child']))
                        @foreach($menuItem['child'] as $childItem)
                            @php
                                $bookmarkRow = $childItem;
                                if (isset($bookmarks[$childItem['route']])) {
                                    $bookmarkRow = $bookmarks[$childItem['route']];
                                }
                            @endphp
                            @if (!empty($bookmarkRow['top']))
                                @can($childItem['route'] . (isset($childItem['route_params']) ? '/' . implode('/', $childItem['route_params']) : ''))
                                <div class="top-menu-item">
                                    <a href="{{ route($childItem['route'], (array)@$childItem['route_params']) }}">
                                        <i class="fa {{ $childItem['icon'] }}"></i>
                                        {{ $childItem['name'] }}
                                    </a>
                                </div>
                                @endcan
                            @endif
                        @endforeach
                    @endif
                @endforeach

            </div>

            <ul class="nav navbar-nav navbar-right">
                <li class="">
                    <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        {{ Auth::user()->name }}
                        <span class=" fa fa-angle-down"></span>
                    </a>
                    <ul class="dropdown-menu dropdown-usermenu pull-right">
{{--                        <li><a href="javascript:;"> Profile</a></li>--}}
{{--                        <li><a href="javascript:;">Help</a></li>--}}
                        <li><a data-toggle="tooltip" data-placement="top" title="{{ __('Logout') }}" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">

                                <i class="fa fa-sign-out pull-right"></i> @lang('Log Out')
                            </a>
                        </li>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </ul>
                </li>
                <li>
                    <a href="{{ env('SECOND_APP_URL') . request()->getRequestUri() }}">
                        <span class="fa fa-share link-to-cms"></span>
                        {{ env('SECOND_APP_NAME') }}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>
<!-- /top navigation -->
