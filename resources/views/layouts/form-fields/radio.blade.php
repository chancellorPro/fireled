@php
    //with model
    if (!empty($model))
    {
        $selected = old($name, $selected ?? $model->{$name} ?? '');
    }
    //without model
    else
    {
        $selected = old($name, $selected ?? $default ?? '');
    }

@endphp
<div class="row form-group {{ $errors->has($name) ? 'has-error' : ''}}">
    @if ((isset($label) && $label !== false) || !isset($label))
    <label class="col-md-4 control-label">
        @if (!empty($label))
            {{ $label }}
        @else
            @formFieldLabel($name)
        @endif
    </label>
    @endif
    <div class="@if (isset($label) && $label === false) col-md-12 @else col-md-6 @endif">
            @foreach($collection as $item)
                @php
                    if (is_array($item)) {
                        $item = (object) $item;
                    }
                    $radioId = uniqid();
                @endphp
                <input autocomplete="off" type="radio" id="radio-{{ $radioId }}"
                        {{($selected == $item->{$id} && $selected !=='')
                                        ? "checked" : ""}}
                        name="{{ $formName ?? $name }}"
                        value="{{ $item->{$id} }}">
                <label for="radio-{{ $radioId }}">{{ $item->{$value} }}</label>
            @endforeach

        {!! $errors->first($name, '<p class="help-block">:message</p>') !!}
    </div>
</div>