@php
    $className = !empty($class) ? $class . ' filter' : 'filter';

    if (empty($filterType)) {
        $filterType = 'string';
    }
@endphp

@switch($filterType)
    @case('array')
        @php
            $value = '';
            $filter_clone = $filter;
            $filter_key = key($filter_clone);
            $filter_array = array_shift($filter_clone);
            if (is_array($filter_array)) {
                $filter_value = key($filter_array);
                if (strpos($field, $filter_value)) {
                    $value = $filter[$filter_key][$filter_value];
                }
            }
        @endphp
        @include('layouts.form-fields.input', [
            'name' => $field,
            'value' => $value ?? '',
            'label' => $label ?? FALSE,
            'fieldId' => "filter_$field",
            'class' => $className,
            'attrs' => $attrs ?? null,
        ])
        @break
    @case('string')
        @include('layouts.form-fields.input', [
            'name' => $field,
            'value' => $filter[$field] ?? '',
            'label' => $label ?? FALSE,
            'fieldId' => "filter_$field",
            'class' => $className,
        ])
        @break
    @case('date_range')
            @php
                $selected = request()->get('date_range') ?? '';
                $inputsStyle = 'style="visibility: hidden; height: 0"';
                if ($selected === 'custom' || ($selected === '' && !empty($filter[$field]))) {
                    $selected = 'custom';
                    $inputsStyle = '';
                }
            @endphp
            @include('layouts.form-fields.select', [
                'fieldId'    => 'date-range-select',
                'label'      => false,
                'name'       => 'date_range',
                'collection' => arrayToCollection(config('presets.date_ranges')),
                'selected'   => $selected,
                'id'         => 'id',
                'value'      => 'name',
                'class'      => 'filter',
                'addempty'   => true
            ])
            <div id="date-range-inputs" {!! $inputsStyle !!}>
                <input
                    type="text"
                    class="form-control filter datepicker filter-from"
                    value="{{$filter[$field]['from'] ?? ''}}"
                    name="{{$field}}[from]"
                    autocomplete="off"
                    placeholder="from"
                >
                <input
                    type="text"
                    class="form-control filter datepicker filter-to"
                    value="{{$filter[$field]['to'] ?? ''}}"
                    name="{{$field}}[to]"
                    autocomplete="off"
                    placeholder="to"
                >
            </div>
        @break
    @case('int')
        @include('layouts.form-fields.input', [
            'name' => $field,
            'value' => $filter[$field] ?? '',
            'inputType' => 'number',
            'label' => $label ?? FALSE,
            'fieldId' => "filter_$field",
            'class' => $className,
            'sortable' => !empty($sortable),
        ])
        @break
    @case('hidden')
    @include('layouts.form-fields.input', [
        'name' => $field,
        'value' => $filter[$field] ?? '',
        'inputType' => 'hidden',
        'label' => FALSE,
        'fieldId' => "filter_$field",
        'class' => $className,
    ])
    @break
    @case('checkbox')
        @include('layouts.form-fields.checkbox', [
            'name' => $field,
            'value' => $filter[$field] ?? '',
            'label' => $label ?? FALSE,
            'fieldId' => "filter_$field",
            'class' => $className,
        ])
        @break
    @case('select')
        @php
            if (!empty($mult)) {
                $selected = collect(isset($filter[$field]) ? (array) $filter[$field] : []);
            } else {
                $selected = isset($filter[$field]) ? $filter[$field] : '';
            }
        @endphp
        @include('layouts.form-fields.select2', [
            'name' => $field,
            'collection' => $filterCollection ?? [],
            'selected' => $selected,
            'id'=>'id',
            'mult' => $mult ?? false,
            'value'=>'name',
            'label'=> $label ?? FALSE,
            'addempty'=>TRUE,
            'fieldId' => "filter_$field",
            'class' => $className,
        ])
    @break
    @case('actions')
        @if(!empty($withEnv))
            @include('common.env-select')
        @endif
        <a href="javascript:void(0)" id="list-filter" class="btn btn-info btn-sm" title="@lang('common.filter')">
            <i class="fa fa-filter" aria-hidden="true"></i> @lang('common.filter')
        </a>
        <a href="javascript:void(0)" id="clear-filter" class="btn btn-info btn-sm" title="@lang('common.clear_filter')">
            <i class="fa fa-times" aria-hidden="true"></i> @lang('common.clear_filter')
        </a>
        @break
@endswitch
