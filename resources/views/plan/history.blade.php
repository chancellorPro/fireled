@extends('layouts.pages.config', [
    'title' => 'Plan History',
    'data' => $data,
    'filter' => $filter,
])

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th class="col-sm-3">@lang('Product')</th>
                    <th class="col-sm-5">@lang('Count')</th>
                    <th class="col-sm-1">@lang('Created At')</th>
                    <th class="col-sm-1">@lang('Closed At')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                <tr>
                    <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'product', 'filterCollection' => $products])</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                </tr>
            </thead>
            <tbody class="fast-save-page-container">
                @foreach($data as $item)
                    <tr>
                        <td>{{ $item->product->name ?? '' }}</td>
                        <td>{{ $item->count }}</td>
                        <td>{{ $item->created_at }}</td>
                        <td>{{ $item->updated_at }}</td>
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
            init_filter_col("{{ route('plan.index') }}");
        })
    </script>
@endpush
