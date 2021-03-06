<?php

declare(strict_types = 1);

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;

class IndexController extends AbstractController
{
    /**
     * @return Factory|View
     */
    public function index()
    {
        if(auth()->user()) {
            return redirect('/product');
        } else {
            return redirect('/home');
        }
    }
}
