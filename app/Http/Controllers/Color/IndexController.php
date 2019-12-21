<?php

namespace App\Http\Controllers\Color;

use App\Http\Controllers\Controller;
use App\Models\Color;
use App\Traits\FilterBuilder;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    /**
     * List of colors
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {
        return view('color.index', [
            'rows'   => Color::oldest('id')->get(),
            'filter' => $this->getFilter(),
        ]);
    }

    /**
     * Order preview
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('color.create');
    }

    /**
     * Order preview
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function edit(int $id)
    {
        return view('color.edit', [
            'model' => Color::findOrFail($id),
        ]);
    }

    /**
     * Order preview
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function show(int $id)
    {
        return view('color.edit', [
            'model' => Color::findOrFail($id),
        ]);
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request)
    {
        Color::create($request->all());

        return $this->redirect('color');
    }

    /**
     * @param         $id
     * @param Request $request
     * @return RedirectResponse
     */
    public function update(Request $request, $id)
    {
        $color = Color::findOrFail($id);
        $color->update($request->all());

        return $this->redirect('color');
    }
}
