@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- product --}}
@include('layouts.form-fields.select2', [
    'label' => __('Product'),
    'model' => $currentModel,
    'name' => 'product_id',
    'collection' => $products,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

<div class="row form-group advice" style="display: none;">
    <label class="control-label col-md-4 col-sm-12">
        Рекомендация
    </label>
    <div class=" col-md-6  col-sm-12">
        <div class="btn btn-primary">
            <i class="fa fa-copy"></i>
            <span id="recommend"></span>
        </div class="btn btn-primary">
    </div>
</div>

{{-- count --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'count',
    'inputType' => 'number',
    'label' => __('Count'),
])
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'start',
    'class'  => 'datepicker',
    'label' => __('Date'),
    'attrs' => ['autocomplete' => 'off'],
])

<input type="hidden" id="box_size">
