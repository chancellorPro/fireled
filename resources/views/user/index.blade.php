@extends('layouts.pages.config', [
    'title' => 'Users',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'user.create',
        'name' => __('User'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create user'),
            'reload' => 1,
        ],
    ])
@endsection

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th class="id">@lang('Id')</th>
                    <th>@lang('Name')</th>
                    <th>@lang('Email')</th>
                    <th>@lang('Created At')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                {{--<tr>--}}
                    {{--<th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'id'])</th>--}}
                    {{--<th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name'])</th>--}}
                    {{--<th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'email'])</th>--}}
                    {{--<th>@include('layouts.filter-col', ['filterType' => 'date_range', 'field' => 'created_at'])</th>--}}
                    {{--<th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>--}}
                {{--</tr>--}}
            </thead>
            <tbody class="fast-save-page-container">
                @foreach($data as $item)
                    <tr>
                        <td>{{ $item->id }}</td>
                        <td>{{ $item->name }}</td>
                        <td>{{ $item->email }}</td>
                        <td>{{ $item->created_at }}</td>
                        <td>
                            @include('common.buttons.edit', [
                                'route' => 'user.edit',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'class' => 'ajax-modal-action show-form',
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                            @include('common.buttons.delete', [
                                'route' => 'user.destroy',
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
            init_filter_col("{{ route('user.index') }}");
        })
    </script>
@endpush
