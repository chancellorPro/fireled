<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class IsCmsUser
{
    public function handle($request, Closure $next, $guard = 'cms_user')
    {
        if (!Auth::guard('cms_user')->user()) {
            return redirect('/home');
        }
        return $next($request);
    }
}