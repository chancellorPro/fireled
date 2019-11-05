<form method="POST" action="{{ route('customer.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('customer.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'customer.store',
            'name' => __('Create'),
        ])
    </div>
</form>
