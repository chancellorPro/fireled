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

{{-- First color --}}
@include('layouts.form-fields.select2', [
    'name' => 'first_color',
    'collection' => $colors,
    'selected' => $currentModel->first_color ?? 0,
    'id'=>'id',
    'mult' => $mult ?? false,
    'value'=>'name',
    'label'=> __('First color'),
    'addempty'=> true,
])

{{-- Second color --}}
@include('layouts.form-fields.select2', [
    'name' => 'second_color',
    'collection' => $colors,
    'selected' => $currentModel->second_color ?? 0,
    'id'=>'id',
    'mult' => $mult ?? false,
    'value'=>'name',
    'label'=> __('Second color'),
    'addempty'=> true,
])

{{-- Preview --}}
@include('layouts.form-fields.files', [
    'files'=> !empty($currentModel) ? $currentModel->productFiles : [],
    'type' => 'image',
    'name' => 'preview',
    'url' => 'url',
    'fileExt' => '.jpg,.png,.gif',
    'id' => 'id',
    'mult' => true,
    'label' => __('Preview'),
])