<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Services\AuthService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use JWTAuth;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    private $authService;
    private $userService;

    public function __construct(AuthService $authService, UserService $userService)
    {
        $this->authService = $authService;
        $this->userService = $userService;


        //$this->middleware('user.permissions',['only' => ['passwordChange', 'logout']]);
        $this->middleware('check.guest',
            ['only' => ['login','store']]
        );
        $this->middleware('check.login',
            ['only' => ['check','tokenDecode','logout','passwordChange']]
        );


        //$this->middleware('jwt.auth',['only' => ['passwordChange', 'logout']]);

        //$this->middleware('auth:api', ['except' => ['store']]);
        /**/
    }


    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard();
    }

    //when register
    public function store(Request $request)
    {
        dd('store');
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
                return response()->json([
                    'status' => 'Error',
                    'message' => 'Input data is not in a valid format',
                    'Validation Errors' => $validator->errors()

                ], 400);
            }

            $userDetailsArr = array(
                'fullname'       => $request->get('fullname'),
                'email'          => $request->get('email'),
                'password'       => bcrypt($request->get('password')),
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



    public function login(Request $request)
    {

        //dd('login');
        $credentials = $request->only('email', 'password');

        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()
                ->json([
                    'code' => 1,
                    'message' => 'Validation failed.',
                    'errors' => $validator->errors()
                ], 422);
        }

        $token = $this->guard()->attempt($credentials);

        if ($token) {
            return response()->json([
                'token' => $token,
                "token_type"=> "bearer",
                "expires_in"=> $this->guard()->factory()->getTTL() * 60,
                'status' => 'Success',
                'message' => 'login successful'],
                200
            );
        } else {
            return response()->json(['status' => 'Error','message' => 'Invalid credentials.'], 401);
        }
    }

    //todo ???
    public function check(Request $request){

        //dd($this->getAuthUser());
        $authHeader = $request->header('Authorization');
        $token = $request->bearerToken();
        //dd($request->input('token'));
        //dd($this->guard()->check());
        $token = JWTAuth::getToken();
        //dd($token);
        dd(JWTAuth::getPayload($token)->toArray());

        try {
            $user = JWTAuth::parseToken()->authenticate();
            dd($user->email);
        } catch (JWTException $exception) {
            var_dump($exception->getMessage ());
        }

    }

    public function logout(Request $request)
    {
        dd('6');
        try {
            $this->guard()->logout();
            //JWTAuth::invalidate($request->token);

            return response()->json([
                'success' => true,
                'message' => 'User logged out successfully'
            ],200);

        } catch (JWTException $exception) {

            return response()->json([
                'success' => false,
                'message' => 'Sorry, the user cannot be logged out'
                //'message' => $exception->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }


    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAuthUser()
    {
        return response()->json($this->guard()->user());
    }


    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60
        ]);
    }


    public function passwordChange(Request $request,$userId){
        dd('7');
        try{
            if(is_numeric ($userId)){
                $userId = intval($userId);
            }else{
                throw new \Exception('The given data was invalid',400);
            }

            $validator = Validator::make($request->all(), [
                'old_pw'  => 'required',
                'new_pw'  => 'required',
                'new_pw_confirm'  => 'required|same:new_pw'
            ]);

            if($validator->fails()){
                return response()->json([
                    'status' => 'Error',
                    'message' => 'Input data is not in a valid format',
                    'Validation Errors' => $validator->errors()
                ], 400);
            }

            $new_pw = bcrypt($request->get('new_pw'));
            $this->userService->changePw($new_pw,$userId);

            $response = array(
                'status'    => 'Success',
                'message'   => 'User password updated successfully'
            );

            return response()->json($response, 200);

        }catch(CustomException $exception){

            $response = array(
                'status'    => 'Error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, $exception->getCode());
        }catch(\Exception $exception){

            $response = array(
                'status'    => 'Error',
                //'message'   => 'Internal server error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, 500);
        }

    }


    public function tokenDecode()
    {
        return $this->getAuthUser();
    }


}
