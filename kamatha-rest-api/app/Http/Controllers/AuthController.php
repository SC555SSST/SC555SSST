<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    private $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
        /*
        $this->middleware('jwt.auth',
            ['only' => ['store', 'update', 'destroy'] ]
        );
        */
    }

    public function store(Request $request)
    {
        try{
            $validator = Validator::make($request->all(), [
                'fullname'  => 'required',
                'email'     => 'required|email|unique:users,email',
                'password'  => 'required',
                'username'  => 'required|unique:users,username',
                'gender'    => 'required',
                'account_type'   => 'required',    //3 or 4
            ]);

            if($validator->fails()){
                throw new ValidationException($validator);
            }

            $userDetailsArr = array(
                'fullname'       => $request->get('fullname'),
                'email'          => $request->get('email'),
                'password'       => $request->get('password'),
                'username'       => $request->get('username'),
                'gender'         => $request->get('gender'),
                'badge'          => $request->get('badge'),
                'account_type'   => $request->get('account_type'),     //3 or 4
            );

            $insertedRecord = $this->authService->add($userDetailsArr);

            $response = array(
                'status'    => 'Success',
                'data'      => $insertedRecord,
                'message'   => 'Post added successfully'
            );

            return response()->json($response, 201);

        }catch (ValidationException $exception) {

            $response = array(
                'status'    => 'Error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, 400);
        }catch(CustomException $exception){

            $response = array(
                'status'    => 'Error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, $exception->getCode());
        }catch(\Exception $exception){

            $response = array(
                'status'    => 'Error',
                'message'   => 'Internal server error',
                //'message'   => $exception->getMessage(),
            );
            return response()->json($response, 500);
        }
    }


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
