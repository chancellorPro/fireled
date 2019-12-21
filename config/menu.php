<?php
return [
    [
        'name' => 'Admin',
        'child' => [
            ['name' => 'Товары', 'route' => 'product.index', 'icon' => 'fa-cubes'],
            ['name' => 'Заказы', 'route' => 'order.index', 'icon' => 'fa-archive'],
            ['name' => 'Клиенты', 'route' => 'user.index', 'icon' => 'fa-users'],
            ['name' => 'Цвета', 'route' => 'color.index', 'icon' => 'fa-paint-brush'],
        ],
    ],

];
