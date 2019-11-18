@extends('layouts.pages.config', [
    'title' => 'Заказы',
    'filter' => $filter,
])

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="id">@lang('Id')</th>
                <th class="col-sm-2">@lang('Customer')</th>
                <th class="col-sm-2">@lang('Total price')</th>
                <th class="col-sm-3">@lang('Created At')</th>
                <th class="col-sm-3">@lang('Closet at')</th>
                <th class="col-sm-3">@lang('Description')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'id'])</th>
                <th></th>
                <th>@include('layouts.filter-col', ['filterType' => 'int_range', 'field' => 'total_sum'])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'date_range', 'field' => 'created_at', 'filterCollection' => $rows])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'date_range', 'field' => 'updated_at', 'filterCollection' => $rows])</th>
                <th></th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @foreach($rows as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->user->name }}</td>
                    <td>{{ $item->total_sum ?? '' }}</td>
                    <td>{{ $item->created_at ?? '' }}</td>
                    <td>{{ $item->updated_at ?? '' }}</td>
                    <td>{{ $item->description ?? '' }}</td>
                    <td>
                        @include('common.buttons.edit', [
                            'name' => 'Открыть',
                            'fa_class' => 'fa-search',
                            'route' => 'order.edit',
                            'route_params' => [
                                'id' => $item->id,
                            ],
                            'class' => '',
                        ])
                        @if($item->status == 0)
                            @include('common.buttons.save', [
                                'btn_class' => 'btn-danger btn-sm',
                                'route' => 'order.close',
                                'name' => 'Закрыть',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                        @endif
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
            init_filter_col("{{ route('product.index') }}");
        })
    </script>
@endpush
