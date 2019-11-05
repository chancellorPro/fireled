@extends('layouts.pages.mail')

@section('main_container')
    <h3>За {{ $dateFrom }} - {{ $dateTo }}</h3>
    <table>
        <thead>
        <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Количество</th>
            <th>Заказчик</th>
        </tr>
        </thead>

{{--        @foreach($data as $row)--}}
{{--            @php--}}
{{--                if(!empty($row->product->product_ref)) {--}}

{{--                    if(isset($rows[$row->product->product_ref->product_id])) {--}}
{{--                        $rows[$row->product->product_ref->product_id]['al_count'] =--}}
{{--                        ($rows[$row->product->product_ref->product_id]['al_count'] > $row->al_count)--}}
{{--                         ? $row->al_count : $rows[$row->product->product_ref->product_id]['al_count'];--}}
{{--                    }--}}

{{--                    $rows[$row->product->product_ref->product_id] = [--}}
{{--                        'product_id' => $row->product->product_ref->product_id,--}}
{{--                        'p_name' => $row->product->product_ref->name,--}}
{{--                        'al_count' => $row->al_count,--}}
{{--                        'c_name' => $row->c_name,--}}
{{--                        'children' => $row->product->product_ref->childProducts->pluck('name')--}}
{{--                    ];--}}

{{--                } else {--}}
{{--                    $rows[$row->product_id] = [--}}
{{--                            'product_id' => $row->product_id,--}}
{{--                            'p_name' => $row->p_name,--}}
{{--                            'al_count' => $row->al_count,--}}
{{--                            'c_name' => $row->c_name,--}}
{{--                        ];--}}
{{--                }--}}
{{--            @endphp--}}
{{--        @endforeach--}}

{{--        @foreach($rows as $row)--}}
{{--            <tr>--}}
{{--                <td> {{ $row['product_id'] ?? '' }} </td>--}}
{{--                <td> {{ $row['p_name'] }} </td>--}}
{{--                <td> {{ $row['al_count'] ?? '' }} </td>--}}
{{--                <td> {{ $row['c_name'] ?? '' }} </td>--}}
{{--            </tr>--}}
{{--        @endforeach--}}


        @foreach($data as $row)
            <tr>
                <td style="text-align: right;"> {{ $row->product_id ?? '' }} </td>
                <td> {{ $row->p_name ?? '' }} </td>
                <td style="text-align: right;"> {{ number_format($row->al_count, 0, ',', ' ') ?? '' }} </td>
                <td> {{ $row->c_name ?? '' }} </td>
            </tr>
        @endforeach
    </table>
@endsection
