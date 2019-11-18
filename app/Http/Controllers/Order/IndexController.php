<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Traits\FilterBuilder;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'id'         => 'equal',
        'total_sum'  => 'int_range',
        'created_at' => 'date_range',
    ];

    /**
     * List of orders
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {
        $data = $this->applyFilter(
            $request,
            Order::oldest('id')
        )->get();

        return view('order.index', [
            'rows'   => $data,
            'filter' => $this->getFilter(),
        ]);
    }

    /**
     * Order preview
     *
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function edit(int $id)
    {
        return view('order.edit', [
            'order' => Order::findOrFail($id),
            'products' => Product::all()->keyBy('id')->toArray()
        ]);
    }

    /**
     * Close order
     *
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function close(int $id)
    {
        $order = Order::findOrFail($id);
        $order->update(['status' => true]);

        return redirect()->back();
    }

}
