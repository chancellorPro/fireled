@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- Name --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'name',
    'label' => __('Name'),
])

{{-- Description --}}
@include('layouts.form-fields.text', [
    'model' => $currentModel,
    'name'  => 'description',
    'label' => __('Description'),
])

