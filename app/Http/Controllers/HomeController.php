<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Traits\FilterBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    use FilterBuilder;

    protected $record_per_page;

    const FILTER_FIELDS = [
        'id'         => 'equal',
        'name'       => 'like_right',
        'page_limit' => 'manual'
    ];

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->record_per_page = 20;
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return RedirectResponse
     */
    public function index(Request $request)
    {
        $products = $this->applyFilter(
            $request,
            Product::oldest('id')
        )->paginate($this->perPage);

        return view('public.index', [
            'filter'          => $this->getFilter(),
            'order'           => $this->record_per_page,
            'record_per_page' => $this->record_per_page,
            'products'        => $products,
        ]);
    }
}
