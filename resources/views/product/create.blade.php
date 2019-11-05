<form method="POST" action="{{ route('product.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('product.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'product.store',
            'name' => __('Create'),
        ])
    </div>
</form>
