@extends('layouts.pages.config', [
    'title' => 'Colors',
])

@section('content')
    <form method="POST" action="{{ route('color.update', ['id' => $model->id]) }}" class="form-horizontal" enctype="multipart/form-data">
        {{ method_field('POST') }}
        {{ csrf_field() }}

        @include ('color.form', [
            'model' => $model,
        ])

        <div class="pull-right">
            @include('common.buttons.cancel')
            <input type="submit" value="@lang('Save')" class="btn-primary btn btn-sm">
        </div>
    </form>
@endsection
