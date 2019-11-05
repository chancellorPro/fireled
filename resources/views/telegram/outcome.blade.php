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
        @foreach($data as $row)
            <tr>
                <td style="text-align: right;"> {{ $row->product_id ?? '' }} </td>
                <td> {{ $row->p_name ?? '' }} </td>
                <td style="text-align: right;"> {{ number_format($row->al_count, 0, ',', ' ') ?? '' }} </td>
                <td> {{ $row->c_name ?? '' }} </td>
            </tr>
        @endforeach
    </table>
