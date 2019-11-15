@section('pageTitle', 'Product list')
@extends('layouts.pages.admin')

@section('categories')
    <div class="categories">
        <ul class="nav side-menu">
            {{--            Categories   --}}
            {{--            @foreach($sections as $section)--}}
            {{--                <li>--}}
            {{--                    <a class="section" href="#" onclick="return false;">--}}
            {{--                        {{ $section->name }}--}}
            {{--                    </a>--}}
            {{--                    <div>--}}
            {{--                        <ul style="display: none;">--}}
            {{--                            @foreach($categories as $category)--}}
            {{--                                @if($category->section_id == $section->id)--}}
            {{--                                    <li>--}}
            {{--                                        <a href="?category={{ $category->id }}">--}}
            {{--                                            {{ $category->name }}--}}
            {{--                                        </a>--}}
            {{--                                    </li>--}}
            {{--                                @endif--}}
            {{--                            @endforeach--}}
            {{--                        </ul>--}}
            {{--                    </div>--}}
            {{--                </li>--}}
            {{--            @endforeach--}}
        </ul>
    </div>
@endsection

@section('content')
    <div class="row filter x_panel" style="padding-top: 17px;">
        <div class="col-sm-8">
            <div class="col-sm-3">
                {{--                <div class="form-group">--}}
                {{--                    <input type="radio" class="filter" name="type" value="0" id="filter_all"--}}
                {{--                            {{ $type == 0 ? 'checked' : '' }}>--}}
                {{--                    <label for="filter_all">All</label>&nbsp;&nbsp;--}}
                {{--                    <input type="radio" class="filter" name="type" value="{{ $asset_types['furniture'] }}"--}}
                {{--                           id="filter_furniture" {{ $type == $asset_types['furniture'] ? 'checked' : '' }}>--}}
                {{--                    <label for="filter_furniture">Furniture</label>&nbsp;&nbsp;--}}
                {{--                    <input type="radio" class="filter" name="type" value="{{ $asset_types['clothes'] }}"--}}
                {{--                           id="filter_clothes" {{ $type == $asset_types['clothes'] ? 'checked' : '' }}>--}}
                {{--                    <label for="filter_clothes">Clothes</label>--}}
                {{--                </div>--}}
            </div>
        </div>
        <div class="col-sm-2 pull-right" style="width: 180px;">
            @include('layouts.filter-col', ['filterType' => 'actions'])
        </div>
        <div class="col-sm-2 pull-right">
            @include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name', 'placeholder' => 'Asset Name'])
        </div>
    </div>

    <div class="row filter x_panel">
        <div class="col-sm-2">
            <select id="order" name="order" class="form-control">
                <option {{ $order == 'AZ' ? 'selected' : '' }} value="AZ">Sort by Name A &gt; Z</option>
                <option {{ $order == 'ZA' ? 'selected' : '' }} value="ZA">Sort by Name Z &gt; A</option>
                <option {{ $order == 'PriceAsc' ? 'selected' : '' }} value="PriceAsc">Sort by price &gt;</option>
                <option {{ $order == 'PriceDesc' ? 'selected' : '' }} value="PriceDesc">Sort by price &gt;</option>
            </select>
        </div>

        <div class="col-sm-offset-2 col-sm-5">
            <div class="pagination-wrapper public-pagination"> {!! $products->appends($filter)->render() !!} </div>
        </div>

        <div class="col-sm-2 pull-right">
            <select id="qty" name="qty" class="form-control pull-right">
                <option {{ $record_per_page == 10 ? 'selected' : '' }} value="10">10</option>
                <option {{ $record_per_page == 100 ? 'selected' : '' }} value="100">100</option>
                <option {{ $record_per_page == 999999 ? 'selected' : '' }} value="999999">All</option>
            </select>
        </div>
        <div class="col-sm-2 pull-right" style="width: 120px;">
            <label for="qty" class="pull-left">Items per page:</label>
        </div>
    </div>

    <div class="row x_panel">
        @foreach($products as $id => $row)
            <div class="pull-left asset asset-box" id="asset-{{$row->id}}">
                <div class="image">
                    @if($row->productFiles->first())
                    <img height="150" src="{{ Storage::url($row->productFiles->first()->url) }}"
                         alt="{{$row->name}} ">
                    @endif
                </div>
                <span>
                    {{ isset($row->nlaAssets->category_id) ?
                    $categories[$row->nlaAssets->category_id]->name : '' }}
                </span>
                <div><b>{{$row->name}}</b>
                    <div class="pull-right">{{$row->price}} UAH</div>
                </div>
                <div class="title">
                    <div>
                        <label for="product{{$row->id}}">Кол-во:</label>
                        <input style="width: 50px;height: 20px;" type="number" min="1" value="{{ $row->count ?? 1 }}"
                               id="product{{$row->id}}"
                               name="product[{{$row->id}}][qty]" class="qty btn btn-ssm btn-default">
                        @auth
                            @include('common.buttons.add', [
                                'name' => 'В корзину',
                                'class' => 'ajax-modal-action show-form',
                                'route' => 'basket.add',
                                'btn_class' => 'btn btn-success btn-ssm',
                                'params' => [
                                    'id' => $row->id,
                                    'qty' => $row->count ?? 1,
                                ],
                                'dataset' => [
                                    'header' => 'Корзина',
                                    'reload' => 1,
                                ],
                            ])
                        @else
                            @include('common.buttons.add', [
                                'name' => 'В корзину',
                                'class' => 'ajax-modal-action show-form',
                                'route' => 'set.phone',
                                'btn_class' => 'btn btn-success btn-ssm',
                                'dataset' => [
                                    'header' => 'Чтобы совершать покупки сообщите нам ваш номер телефона',
                                    'reload' => 1,
                                ],
                            ])
                        @endauth
                    </div>
                </div>
            </div>
        @endforeach
    </div>

    <div class="row filter x_panel">
        <div class="col-sm-2">
            <select id="order" name="order" class="form-control">
                <option {{ $order == 'AZ' ? 'selected' : '' }} value="AZ">Sort by Name A &gt; Z</option>
                <option {{ $order == 'ZA' ? 'selected' : '' }} value="ZA">Sort by Name Z &gt; A</option>
                <option {{ $order == 'PriceAsc' ? 'selected' : '' }} value="PriceAsc">Sort by price &gt;</option>
                <option {{ $order == 'PriceDesc' ? 'selected' : '' }} value="PriceDesc">Sort by price &gt;</option>
            </select>
        </div>

        <div class="col-sm-offset-2 col-sm-5">
            <div class="pagination-wrapper public-pagination"> {!! $products->appends($filter)->render() !!} </div>
        </div>

        <div class="col-sm-2 pull-right">
            <select id="qty" name="qty" class="form-control pull-right">
                <option {{ $record_per_page == 10 ? 'selected' : '' }} value="10">10</option>
                <option {{ $record_per_page == 100 ? 'selected' : '' }} value="100">100</option>
                <option {{ $record_per_page == 999999 ? 'selected' : '' }} value="999999">All</option>
            </select>
        </div>
        <div class="col-sm-2 pull-right" style="width: 120px;">
            <label for="qty" class="pull-left">Items per page:</label>
        </div>
    </div>
@endsection

@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script src="{{ asset("js/jquery.mask.js") }}"></script>
    <script type="text/javascript">
        $(document)
            .ready(function () {
                init_filter_col("{{ route('home') }}");
                $("#phone").mask("(99) 9999-9999");
            })

            .on('input', '.qty', function () {
                let url = new URL($(this).next().attr('href'));
                let searchParams = new URLSearchParams(url.search.slice(1));
                searchParams.delete('qty');
                searchParams.set('qty', $(this).val());
                url.search = searchParams.toString();
                $(this).next().attr('href', url.href);
            });
    </script>
@endpush
