<div class="row form-group {{ $errors->has($name) ? 'has-error' : ''}}">
    @if ((isset($label) && $label !== false) || !isset($label))
        <label {{ !empty($fieldId) ? "for=$fieldId" : "" }} class="col-md-4 control-label">
            @if (!empty($label))
                {{ __($label) }}
            @else
                @formFieldLabel($name)
            @endif
        </label>
    @endif

    <div class="@if (isset($label) && $label === false) col-md-12 @else col-md-6 @endif">
        <textarea class="form-control" name="{{ $formName ?? $name }}" {{ !empty($fieldId) ? "id=$fieldId" : "" }} {{ !empty($attrs) ? implode(parameterizeArray($attrs), ' ') : '' }}>{{ old($name, $value ?? $model->{$name} ?? '') }}</textarea>
        {!! $errors->first($name, '<p class="help-block">:message</p>') !!}
    </div>
</div>