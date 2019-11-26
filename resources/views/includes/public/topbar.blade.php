<!-- top navigation -->
<div class="public top_nav">
    <div class="nav_menu">
        @auth
            @include('common.buttons.add', [
                'name' => 'Корзина',
                'class' => 'ajax-modal-action show-form',
                'route' => 'basket.index',
                'fa_class' => 'fa-shopping-cart',
                'btn_class' => 'btn btn-default pull-right',
                'dataset' => [
                    'header' => 'Корзина',
                    'reload' => 1,
                ],
            ])
        @else
            @include('common.buttons.add', [
                'name' => 'Корзина',
                'class' => 'ajax-modal-action show-form',
                'route' => 'set.phone',
                'fa_class' => 'fa-shopping-cart',
                'btn_class' => 'btn btn-default pull-right',
                'dataset' => [
                    'header' => 'Чтобы совершать покупки сообщите нам ваш номер телефона',
                    'reload' => 1,
                ],
            ])
        @endauth

    </div>
</div>
<!-- /top navigation -->
