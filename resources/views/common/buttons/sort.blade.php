@if(empty($route) || Gate::check($route ?? ''))
<a
    @if(!empty($route))
            @php
                if(isset($route_params['sort'])
                    && !empty($sort)
                    && $route_params['sort'] == $sort) {
                    $route_params['order']  = $order == 'desc' ? 'asc' : 'desc';
                }
                if(!empty($env) && empty($route_params['env'])) {
                    $route_params['env'] = $env;
                }
            @endphp
    href="{{ route($route, $route_params ?? []) }}"
    @endif
    title="{{ $name ?? '' }}"
    class="{{ $class ?? '' }}"
    id="{{ $id ?? '' }}"
    @if(!empty($dataset))
        @foreach($dataset as $dataKey => $dataValue)
            data-{{ $dataKey }}="{{ $dataValue }}"
        @endforeach
    @endif
>

    @if(isset($route_params['order']))
            <i class="fa {{$route_params['order'] == 'desc' ? 'fa-sort-up': 'fa-sort-down'}}" aria-hidden="true"></i>
    @endif
    {{ $name ?? '' }}

</a>
@endif
