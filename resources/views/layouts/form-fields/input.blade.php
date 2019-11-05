<div class="row form-group {{ $errors->has($name) ? 'has-error' : ''}}">
    @if ((isset($label) && $label !== false) || !isset($label))
        <label {{ !empty($fieldId) ? "for=$fieldId" : "" }} class="control-label col-md-4 col-sm-12">
            @if (!empty($sortable))
                @php
                $fieldsName = $formName ?? $name;
                $direction = '';

                if (request()->has('sort') && request()->get('sort') === $fieldsName) {
                    $direction = '-';
                }
                @endphp
                <a href="{{request()->fullUrlWithQuery(['sort' => $direction . $fieldsName])}}">
            @endif

            @if (!empty($label))
                {{ __($label) }}
            @else
                @formFieldLabel($name)
            @endif

            @if (!empty($sortable))
                </a>
            @endif
        </label>
    @endif

    <div class="@if (isset($label) && $label === false) col-md-12 @else col-md-6 @endif col-sm-12">
        <input
            type="{{ $inputType ?? 'text' }}"
            class="form-control {{ $class ?? '' }}"
            name="{{ $formName ?? $name }}"
            {{ !empty($fieldId) ? "id=$fieldId" : "" }}
            value="{{ old($name, $value ?? $model->{$name} ?? '') }}"
            {{ !empty($disabled) ? 'disabled' : '' }}
            placeholder="{{ $placeholder ?? '' }}"
            {{ !empty($attrs) ? implode(parameterizeArray($attrs), ' ') : '' }}
        >
        {!! $errors->first($name, '<p class="help-block">:message</p>') !!}
    </div>
</div>
