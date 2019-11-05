@extends('layouts.pages.mail')

@section('main_container')
    <div style="position: relative">
        <table class="tablestickyheader">
            <thead>
            <tr>
                <th>#</th>
                <th>Наименование</th>
                <th>На складе</th>
                <th>План</th>
                <th>Кол-во ящиков</th>
                <th>Вес ящика</th>
                <th>Объём ящиков</th>
            </tr>
            </thead>
            @foreach($data as $row)
                <tr>
                    <td> {{ $row->product_id ?? '' }} </td>
                    <td> {{ $row->p_name ?? '' }} </td>
                    <td> {{ $row->s_count ?? '' }} </td>
                    <td> {{ $row->pl_count ?? '' }} </td>
                    <td> {{ $row->boxes_count }} </td>
                    <td> {{ $row->box_weight ?? '' }} </td>
                    <td> {{ (isset($row->product) && isset($boxes[$row->product->box_id])) ? $boxes[$row->product->box_id] : '' }} </td>
                </tr>
            @endforeach
        </table>
    </div>
@endsection

