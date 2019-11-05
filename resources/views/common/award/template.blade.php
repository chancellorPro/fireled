@php
    $templateId = $templateId ?? 'award';
    $templatePlaceholder = '%award_id%';
    $buttonName = $buttonName ?? 'Award';
    $fieldName = $fieldName ?? 'award_id';
@endphp

<template id="{{$templateId}}-edit">
    @include('common.award.button.edit', [
        'id' => $templatePlaceholder,
    ])
    @include('common.award.button.delete', [
        'templateId' => $templateId . '-create',
        'buttonName' => $buttonName,
        'id' => $templatePlaceholder,
    ])
    <input type="hidden" name="{{$fieldName}}" value="{{$templatePlaceholder}}" />
</template>
<template id="{{$templateId}}-create">
    @include('common.award.button.create', [
        'reload' => $reload ?? null,
        'templateId' => $templateId . '-edit',
    ])
</template>

