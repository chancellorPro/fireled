@php
    $defaultReload = $reload ?? 1;
@endphp
@include('common.buttons.create', [
    'route' => 'award.create',
    'name' => $buttonName,
    'class' => 'award-create-button ajax-modal-action',
    'dataset' => [
        'header' => __('Create award'),
        'template-id' => $templateId,
        'template-placeholder' => $templatePlaceholder,
        'field-name' => $fieldName ?? '',
        'event' => 'AWARD_DELETE',
        'close-event' => 'CLOSE_AWARD_MODAL',
        'reload' => $defaultReload,
    ],
])
