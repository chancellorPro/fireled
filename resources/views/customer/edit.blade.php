<form method="POST" action="{{ route('customer.update', ['id' => $model->id]) }}" class="form-horizontal">
    {{ method_field('PATCH') }}
    {{ csrf_field() }}

    @include ('customer.form', [
        'model' => $model,
    ])

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'customer.update',
            'route_params' => [
                'id' => $model->id,
            ],
            'dataset' => [
                'method' => 'PATCH',
            ],
        ])
    </div>
</form>
