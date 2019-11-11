@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- Name --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'name',
    'label' => __('Name'),
])

{{-- Price --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'price',
    'label' => __('Price'),
])

{{-- Description --}}
@include('layouts.form-fields.text', [
    'model' => $currentModel,
    'name'  => 'description',
    'label' => __('Description'),
])

{{-- Preview --}}
@include('layouts.form-fields.files', [
    'file'=> !empty($currentModel) ? $currentModel->productFiles->first() : [],
    'type' => 'image',
    'name' => 'preview',
    'url' => 'url',
    'fileExt' => '.jpg,.png,.gif',
    'id' => 'id',
    'label' => __('Preview'),
])