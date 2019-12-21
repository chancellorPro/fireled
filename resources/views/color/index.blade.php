@extends('layouts.pages.config', [
    'title' => 'Colors',
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'color.create',
        'name' => __('Color'),
        'class' => '',
    ])
@endsection

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="id">@lang('Id')</th>
                <th class="col-sm-2">@lang('Name')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'id'])</th>
                <th></th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @foreach($rows as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->name }}</td>
                    <td>
                        @include('common.buttons.edit', [
                            'route' => 'color.edit',
                            'route_params' => [
                                'id' => $item->id,
                            ],
                            'class' => '',
                        ])
                        @include('common.buttons.delete', [
                            'route' => 'color.destroy',
                            'route_params' => [
                                'id' => $item->id,
                            ],
                            'dataset' => [
                                'header' => $item->name,
                            ],
                        ])
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>

@endsection

@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('color.index') }}");
        })
    </script>
@endpush
