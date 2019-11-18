@extends('layouts.pages.config', [
    'title' => 'Заказ #' . $order->id
])

@section('content')
    <div class="center x_panel" style="width: 600px;">
        <form method="post" action="{{ route('order.close', ['id' => $order->id]) }}" class="form-horizontal">
            {{ method_field('POST') }}
            {{ csrf_field() }}

            <h2>Заказчик: <a href="tel:{{ $order->user->name }}">{{ $order->user->name }}</a></h2>

            @foreach(json_decode($order->order_data) as $k => $item)
                <div class="row" style="{{ (($k % 2) == 0) ? 'background:#eaeaea' : ''}}">
                    <div class="col-sm-6">
                        Товар: {{ $products[$item->product_id]['name'] }}
                    </div>
                    <div class="col-sm-6">
                        x{{ $item->count }}
                    </div>
                </div>
            @endforeach
            <div class="clearfix"></div>
            <hr>
            <div class="row">
                <div class="col-sm-6">
                    <b>Итого: ₴{{ $order->total_sum }}</b>
                </div>
                <div class="col-sm-6">
                    Создан: {{ $order->created_at }}
                </div>

            </div>
            <div class="row">
                <div class="col-sm-12">
                    Описание: {{ $order->description }}
                </div>
            </div>

            @if($order->status == 0)
                <div class="pull-right">
                    <input type="submit" value="@lang('Закрыть заказ')" class="btn-danger btn btn-sm">
                </div>
            @else
                <div class="pull-right col-sm-6">
                    Закрыт: {{ $order->updated_at }}
                </div>
            @endif
        </form>
    </div>
@endsection
