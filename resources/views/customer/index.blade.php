@extends('layouts.pages.config', [
    'title' => 'Customers',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'customer.create',
        'name' => __('Customer'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create customer'),
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
                    <th>@lang('Description')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                {{--<tr>--}}
                    {{--<th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'id'])</th>--}}
                    {{--<th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name'])</th>--}}
                    {{--<th></th>--}}
                    {{--<th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>--}}
                {{--</tr>--}}
            </thead>
            <tbody class="fast-save-page-container">
                @foreach($data as $item)
                    <tr>
                        <td>{{ $item->id }}</td>
                        <td>
                            @include('layouts.form-fields.input', [
                                'name' => "customer[{$item->id}][name]",
                                'label' => false,
                                'value' => $item->name ?? ''
                            ])
                        </td>
                        <td>
                            @include('layouts.form-fields.input', [
                                'name' => "customer[{$item->id}][description]",
                                'label' => false,
                                'value' => $item->description ?? ''
                            ])
                        </td>
                        <td>
                            @include('common.buttons.edit', [
                                'route' => 'customer.edit',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'class' => 'ajax-modal-action show-form',
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                            @include('common.buttons.delete', [
                                'route' => 'customer.destroy',
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
            init_filter_col("{{ route('customer.index') }}");
        })
    </script>
@endpush
