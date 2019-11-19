@extends('layouts.pages.config', [
    'title' => 'Products',
])

@section('content')
    <form method="POST" action="{{ route('product.store') }}" class="form-horizontal" enctype="multipart/form-data">
        {{ method_field('POST') }}
        {{ csrf_field() }}

        @include ('product.form')

        <div class="pull-right">
            @include('common.buttons.cancel')
            <input type="submit" value="@lang('Create')" class="btn-primary btn btn-sm">
        </div>
    </form>
@endsection
