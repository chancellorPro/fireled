<form method="POST" action="{{ route('stock.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('stock.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'stock.store',
            'name' => __('Create'),
        ])
    </div>
</form>
