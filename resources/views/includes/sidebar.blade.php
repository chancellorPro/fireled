<div class="col-md-3 left_col">
    <div class="left_col scroll-view">
        <div class="navbar nav_title" style="border: 0;">
            <a href="{{ url('/home') }}" class="site_title">
                <i class="fa fa-home"></i>
                <span>{{ config('app.name', 'Fire Led') }}</span>
            </a>
        </div>

        <div class="clearfix"></div>

        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu-section">
                <ul class="nav side-menu">
                    @foreach(config('menu') as $menuItem)
                        @if (isset($menuItem['child']))
                            @foreach($menuItem['child'] as $childItem)
                                <li>
                                    <a href="{{ route($childItem['route'], (array)@$childItem['route_params']) }}">
                                        <i class="fa {{ $childItem['icon'] }}"></i>
                                        {{ $childItem['name'] }}
                                    </a>
                                </li>
                            @endforeach
                        @endif
                    @endforeach
                </ul>
            </div>
        </div>
        <!-- /sidebar menu -->
        
        <!-- /menu footer buttons -->
<!--        <div class="sidebar-footer hidden-small">
            <a>
                <span class="glyphicon"></span>
            </a>
            <a>
                <span class="glyphicon"></span>
            </a>
            <a>
                <span class="glyphicon"></span>
            </a>

            <a data-toggle="tooltip" data-placement="top" title="Logout" href="{{ route('admin.logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
            <form id="logout-form" action="{{ route('admin.logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </div>-->
        <!-- /menu footer buttons -->
    </div>
</div>
