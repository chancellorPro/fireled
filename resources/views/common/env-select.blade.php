@include('layouts.form-fields.select', [
    'label' => false,
    'name' => 'env',
    'collection' => arrayToCollection(config('presets.environments')),
    'id'=>'id',
    'selected' => environment(),
    'value'=>'name',
    'class' => 'filter'
])