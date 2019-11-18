<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductFile;
use App\Services\FileService;
use App\Traits\FilterBuilder;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'id'         => 'equal',
        'name'       => 'like_right',
        'parent_id'  => 'manual',
        'page_limit' => 'manual'
    ];

    /**
     * List of products
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {

        $data = $this->applyFilter(
            $request,
            Product::oldest('id')
        )->get();

        return view('product.index', [
            'rows'   => $data,
            'filter' => $this->getFilter(),
        ]);
    }

    /**
     * Save new product
     *
     * @param Request $request Request
     *
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $product = Product::create($request->all());

        $productFiles = [];
        $this->saveFile(
            $productFiles,
            $request->file('preview'),
            config('presets.adp_file_types.animation'),
            'Product/' . $product->id
        );
        $product->productFiles()->saveMany($productFiles);

        pushNotify('success', __('Product') . ' ' . __('common.action.added'));

        return redirect()->route('product.index');
    }

    /**
     * Update product
     *
     * @param Request $request Request
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function update(Request $request, int $id)
    {
        $product = Product::findOrFail($id);
        $product->update($request->all());

        $productFiles = [];
        $this->saveFile(
            $productFiles,
            $request->file('preview'),
            config('presets.adp_file_types.animation'),
            'public/Product/' . $product->id
        );
        $product->productFiles()->saveMany($productFiles);

        return redirect()->back();
    }

    /**
     * Create new product view
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('product.create', [
            'products'  => Product::all(),
        ]);
    }

    /**
     * Edit product view
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function edit(int $id)
    {
        return view('product.edit', [
            'model'     => Product::find($id),
            'products'  => Product::all(),
        ]);
    }

    /**
     * Edit product view
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function show($id)
    {
        return view('product.edit', [
            'model'     => Product::find($id),
            'products'  => Product::all(),
        ]);
    }

    /**
     * Delete product
     *
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function destroy(int $id)
    {
        Product::destroy($id);

        return $this->success();
    }

    /**
     * Save file
     *
     * @param $productFiles
     * @param mixed $file File
     * @param mixed $type Type
     * @param mixed $folder Folder
     *
     * @return void
     */
    private function saveFile(&$productFiles, $file, $type, $folder)
    {
        if ($file) {
            $ext           = FileService::getFileExt($file);
            $path          = FileService::uploadFile($file, $folder, uniqid() . $ext);
            $productFiles[] = new productFile([
                'name'      => $file->getClientOriginalName(),
                'type'      => $type,
                'url'       => $path,
                'file_hash' => hash_file('md5', Storage::path($path))
            ]);
        }
    }

    /**
     * Get upload folder
     *
     * @return string
     */
    protected static function getUploadFolder(): string
    {
        return Product::getUploadFolder();
    }

}
