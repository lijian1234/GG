<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\Crypt;

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

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login()
    {
        // dd(encrypt('mkw0pp2smDbJOMbLrq33T6KKYLLxU7drnrrRI0EVPKg='));
        // dd(hash::make('lijian123'));
        // dd(decrypt('eyJpdiI6IlNxSjQrdWNJb2hZTXJBcHQ1ME82aXc9PSIsInZhbHVlIjoiMzExT2ZZTkdRcXM2ejFzbVQ3ZVBXbXVMTjFOZ3RZMUFtUjZONnR6dUNmQT0iLCJtYWMiOiI3N2FiNzcwOTllMWIzNzQ2NjA0Yjk3OTRkOWUzYzAyYjVkYTJlYWM1Nzk1OGUwOTg4OTE1ZWUxYmYyY2MwMGM5In0='));
        $email = request('email');
        $password = request('password');
        // dd($password);
        if ( auth()->attempt(['email'=> $email, 'password'=> $password])){
            return response()->json([
                'success' => 'true',
                'code'=> 20000,
                'data'=>'ceshi'
            ]);
        }
        return response()->json([
            'status' => 'login error',
            'status_code' => 421,
            'message' => 'Credentials not match'
        ],421);
    }
}
