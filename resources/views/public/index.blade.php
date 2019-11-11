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
            <select id="order"  name="order" class="form-control">
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
                @if(isset($row) && $row->cash_price > 0)
                    <div class="currency icon cash"></div>
                @elseif(isset($row) && $row->coins_price > 0)
                    <div class="currency icon coin"></div>
                @endif
                <a href="#" title="{{$row->name}}" data-id="{{$row->id}}"
                   data-name="{{$row->name}}">
                    <div class="image">
                        <img height="150" src="{{ Storage::url($row->productFiles->first()->url) }}"
                        alt="{{$row->name}} ">
                    </div>
                    <span>{{ isset($row->nlaAssets->category_id) ?
                    $categories[$row->nlaAssets->category_id]->name : '' }}</span>
                    <div class="title">{{$row->name}} <b class="pull-right">{{$row->price}} UAH</b></div>
                </a>
            </div>

        @endforeach
    </div>

    <div class="row filter x_panel">
        <div class="col-sm-2">
            <select id="order"  name="order" class="form-control">
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
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('home') }}");
        })
    </script>
@endpush
