<a
    @if(!empty($route))
            @php
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
    <button class="btn {{ $btn_class ?? '' }}">
        @if (!empty($btn_body))
            {!! $btn_body !!}
        @else
            <i class="fa {{ $fa_class ?? '' }}" aria-hidden="true"></i>
            {{ $name ?? '' }}
        @endif
    </button>
</a>
