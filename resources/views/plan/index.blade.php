@extends('layouts.pages.config', [
    'title' => 'Plan',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'plan.create',
        'name' => __('Plan'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create plan'),
            'reload' => 1,
        ],
    ])
@endsection

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="col-sm-3">@lang('Product')</th>
                <th class="col-sm-5">@lang('Count')</th>
                <th class="col-sm-1">@lang('Created At')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'product', 'filterCollection' => $products])</th>
                <th></th>
                <th></th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @foreach($data as $item)
                <tr>
                    <td>{{ $item->product->name ?? '' }}</td>
                    <td>
                        <div style="height: 40px;background: #d9534f">
                            @php
                                $progress = round($item->count > 0 ? $item->progress / $item->count * 100 : 0);
                                $progress > 100 ? $progress = 100 : null;
                            @endphp
                            <div class="progress-bar" style="width: {{ $progress }}%">
                                {{ $progress }}%
                            </div>
                        </div>
                        <div class="pull-right">{{ $item->count }}</div>
                        <div class="pull-left">{{ $item->progress }}</div>
                    </td>
                    <td>{{ $item->start }}</td>
                    <td>
                        @include('common.buttons.edit', [
                            'route' => 'plan.edit',
                            'route_params' => [
                                'id' => $item->id,
                            ],
                            'class' => 'ajax-modal-action show-form',
                            'dataset' => [
                                'header' => $item->name,
                            ],
                        ])
                        @include('common.buttons.delete', [
                            'route' => 'plan.destroy',
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
            init_filter_col("{{ route('plan.index') }}");
        });

        const products = JSON.parse((new DOMParser).parseFromString('{{ addslashes(json_encode($products->toArray())) }}', 'text/html').body.textContent);

        $(document)
            .on('change', '[name="product_id"]', function () {
                let _id = $(this).val();
                let product_item = products.find(function (item) {
                    return item.id == _id;
                });

                $('#box_size').val(product_item.box_size);
                $('#recommend').text(product_item.box_size);
                $('.advice').show();
            })

            .on('input', '[name="count"]', function () {
                let box_size = $('#box_size').val();
                let recommendSize = Math.ceil($(this).val() / box_size) * box_size;
                if(recommendSize === 0) {
                    recommendSize = box_size;
                }
                if (recommendSize !== $(this).val()) {
                    $('#recommend').text(recommendSize).show();
                }
            })

            .on('click', '#recommend', function () {
                $('[name="count"]').val($(this).text());
            });
    </script>
@endpush
