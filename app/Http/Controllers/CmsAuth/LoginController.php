<?php

namespace App\Http\Controllers\CmsAuth;

use App\Http\Controllers\Controller;
use App\Traits\AuthenticatesCmsUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    use AuthenticatesCmsUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/product';
    protected $redirectAfterLogout = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('isCmsUser')->except('logout');
    }

    public function showLoginForm()
    {
        return view('auth.login');
    }

    protected function guard()
    {
        return Auth::guard('cms_user');
    }

    public function logout()
    {
        auth('cms_user')->logout();
        return redirect($this->redirectAfterLogout);
    }
}
