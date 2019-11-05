@php
    $dateUtc = '';
    $datePst = '';

    if (!empty($item->{$field})) {
        $dateUtc = $item->{$field} . ' UTC';
    }

    if (!empty($item->{$field . '_pst'})) {
        $datePst = $item->{$field . '_pst'};
    }
@endphp
<span title="{{ $dateUtc }}">{{ $datePst }}</span>
