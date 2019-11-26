@php
    $requestParams = $params ?? [];
@endphp

<a data-toggle="lightbox" data-max-width="900" href="{{ route($route, $requestParams) }}" data-title="{{ $dataset['header'] }}">
    <button class="{{ $btn_class ?? 'btn btn-success btn-sm' }}">
        <i class="fa {{ $fa_class ?? 'fa-plus' }}" aria-hidden="true"></i>
        {{ $name ?? __('Add') }}
    </button>
</a>
