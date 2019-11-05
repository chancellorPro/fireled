@if(!empty($rotationInfo) && $rotationInfo->table_actives_depth <= $rotationInfo->table_index)
    @if(empty($filter['full_history']))
    <div>
        <h4>@lang('Search performed in ')
            {{ $rotationInfo->table_actives_depth }}
            @lang('of')
            {{ $rotationInfo->table_index }}
            @lang('tables')

            <a class="btn btn-ssm btn-primary" href="{{ route(Route::currentRouteName(), array_merge(['full_history' => 1], $filter)) }}">Load full history </a>
            <span>(may take a while to load)</span>
        </h4>

    </div>
    @else
    <div>
        <h4>
            @lang('Searched in full history')

            @php unset($filter['full_history']) @endphp
            <a class="btn btn-ssm btn-primary" href="{{ route(Route::currentRouteName(),  $filter) }}">Standard search</a>
        </h4>

    </div>
    @endif
@endif
