<form method="POST" action="{{ route('plan.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('plan.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'plan.store',
            'name' => __('Create'),
        ])
    </div>
</form>
