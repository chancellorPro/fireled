@php
    $currentModel = isset($model) ? $model : null;
@endphp

@include('layouts.form-fields.select2', [
    'label' => __('Action type'),
    'model' => $currentModel,
    'name' => 'income',
    'collection' => $transaction_type,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

@include('layouts.form-fields.select2', [
    'fieldId' => 'product_id',
    'label' => __('Product'),
    'model' => $currentModel,
    'name' => 'product_id',
    'collection' => $products,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'date',
    'class'  => 'datepicker',
    'label' => __('Date'),
    'attrs' => ['autocomplete' => 'off'],
])

<div class="row form-group">
    <label class="control-label col-md-4 col-sm-12">{{ __('Count') }}</label>
    <div class="col-md-3">
        @include('layouts.form-fields.input', [
            'model' => $currentModel,
            'name'  => 'box_count',
            'inputType' => 'number',
            'placeholder' => 'Кол-во ящиков',
            'label' => false,
        ])
    </div>
    <div class="col-md-3">
        @include('layouts.form-fields.input', [
            'model' => $currentModel,
            'name'  => 'count',
            'inputType' => 'number',
            'placeholder' => 'Единицы товара',
            'label' => false,
        ])
    </div>
</div>

@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'partition',
    'inputType' => 'number',
    'label' => __('Partition'),
])

@include('layouts.form-fields.select2', [
    'label' => __('Customer'),
    'model' => $currentModel,
    'name' => 'customer_id',
    'collection' => $customers,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

@include('layouts.form-fields.text', [
    'model' => $currentModel,
    'name'  => 'description',
    'label' => __('Description'),
])

@include('layouts.form-fields.input', [
    'value' => auth()->user()->id,
    'name'  => 'created_by',
    'label' => false,
    'inputType' => 'hidden',
])
<script type="text/javascript">
    $(document).ready(function () {
        $('.modal-content').find('select.select2').select2();
    });
</script>
