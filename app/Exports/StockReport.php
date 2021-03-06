<?php

namespace App\Exports;

use App\Models\Product;
use App\Models\Stock;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class StockReport implements FromCollection, WithHeadings
{

    protected $from;
    protected $to;
    protected $income;
    protected $hasParent;

    public function __construct($from, $to, $income, $hasParent = null)
    {
        $this->from = $from;
        $this->to = $to;
        $this->income = $income;
        $this->hasParent = $hasParent;
    }

    public function headings(): array
    {
        return ['#', 'Наименование', 'На складе', 'План', 'Кол-во ящиков', 'Вес ящика'];
    }

    /**
    * @return Collection
    */
    public function collection()
    {
        $builder = Stock::selectRaw('
        stock.product_id,
        p.name as p_name,
        stock.count as s_count, 
        pl.count as pl_count, 
        round(stock.count / p.box_size) as boxes_count, 
        p.box_weight as box_weight')
            ->join('products AS p', 'p.id', '=', 'stock.product_id')
            ->leftJoin('plan AS pl', 'pl.product_id', '=', 'stock.product_id');

        return $builder->orderBy('stock.updated_at', 'desc')->get();
    }
}
