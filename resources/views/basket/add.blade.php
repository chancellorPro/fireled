<div>
    @php
        $total_sum = 0;
    @endphp
    @foreach($basket as $item)
        <div class="row x_panel" style="min-height: 100px">
            <div class="col-sm-5">
                <div class="basket-image">
                    @if($item->product->productFiles->first())
                        <img height="100" src="{{ Storage::url($item->product->productFiles->first()->url) }}"
                             alt="{{$item->product->name}}">
                    @endif
                </div>
            </div>
            <div class="col-sm-7">
                <div>
                    <b>{{$item->product->name}}</b>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="basket-price" data-price="{{$item->product->price}}">
                        <span>
                            {{$item->product->price}} UAH
                        </span>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div>
                            <input class="form-control recount" min="1" type="number" name="{{$item->product_id}}[count]" value="{{$item->count}}">
                        </div>
                    </div>
                    <div class="col-sm-5">
                        @php
                            $total_sum += $item->count * $item->product->price;
                        @endphp
                        Сумма: <b class="item-sum">{{$item->count * $item->product->price}}</b> UAH
                    </div>
                </div>
            </div>

            <div style="position:absolute;bottom: 10px; right: 10px"><a class="item-remove" href="{{route('basket.remove', ['id' => $item->product_id])}}"><i class="fa fa-times"></i> Удалить товар из корзины</a></div>
        </div>
    @endforeach
    <div class="row x_panel">
        <div class="col-sm-5" style="padding-top: 25px">
            <button type="button" class="btn btn-default basket-hide" data-dismiss="modal" aria-label="Close">Продолжить покупки</button>
        </div>
        <div class="col-sm-4 pull-right" style="background: #fff3b5;padding: 15px">
            Итого: <b id="total-sum">{{ $total_sum }}</b> UAH
            <button class="btn btn-success" id="order-send" data-route="{{route('order.send')}}">Оформить заказ</button>
        </div>
    </div>
</div>