<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
    /*
    public function login(LoginRequest $request)
    {
        $email = $request->get('email');
        $password = $request->get('password');

        return $this->response($this->loginProxy->attemptLogin($email, $password));
    }

    public function logout()
    {
        $this->loginProxy->logout();

        return $this->response(null, 204);
    }




    public function logout(Request $request)
    {
        $user = Auth::guard('api')->user();

        if ($user) {
            $user->api_token = null;
            $user->save();
        }

        return response()->json(['data' => 'User logged out.'], 200);
    }


    */
}
