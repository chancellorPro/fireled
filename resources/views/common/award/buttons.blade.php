{{--Use for mult rows with asset creation. Do not forget 'template'--}}
@php
    $templateId = $templateId ?? 'template-' . uniqid();
    $templatePlaceholder = '%award_id%';
    $buttonName = $buttonName ?? 'Award';
    $fieldName = $fieldName ?? 'award_id';
@endphp

<div class="row form-group">
    <div class="text-center">
        <div>
            @if(!empty($award_id) && !empty($awards[$award_id]))
                @include('common.award.button.edit', [
                    'id' => $award_id,
                    'reload' => isset($reload) ? $reload : null,
                ])
                @include('common.award.button.delete', [
                    'templateId' => $templateId . '-create',
                    'id' => $award_id,
                ])
                <input type="hidden" name="{{$fieldName}}" value="{{$award_id}}" />
            @else
                @include('common.award.button.create', [
                    'reload' => isset($reload) ? $reload : null,
                    'templateId' => $templateId . '-edit',
                    'fieldName' => $fieldName,
                ])
                <input type="hidden" name="{{$fieldName}}" />
            @endif
        </div>
    </div>
</div>
