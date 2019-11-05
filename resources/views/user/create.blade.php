<form method="POST" action="{{ route('user.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('user.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'user.store',
            'name' => __('Create'),
        ])
    </div>
</form>
