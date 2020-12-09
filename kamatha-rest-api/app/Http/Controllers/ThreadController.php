<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomException;
use App\Models\Thread;
use App\Services\ThreadService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class ThreadController extends Controller
{
     private $ThreadService;

    public function __construct(ThreadService $ThreadService)
    {
        $this->ThreadService = $ThreadService;;
        /*
        $this->middleware('jwt.auth',
            ['only' => ['store', 'update', 'destroy'] ]
        );
        */
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
            $threadInfo = $this->ThreadService->viewAll();
            $response = array(
                'status'    => 'success',
                'data'      => $threadInfo,
                'message'   => ''
            );

            if(empty($threadInfo) == 0){
                return response()->json($response, 404);
            }else{
                return response()->json($response, 200);
            }

        }catch(\Exception $exception){
            $response = array(
                'status'    => 'error',
                'message'   => 'server error',
            );
            //return response()->json($response, 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //dd($request->get('category'));
        try{
            $validator = Validator::make($request->all(), [
                'title' => 'required',
                'text' => 'required',
                'category' => 'required',
                'userId' => 'required|integer',
            ]);

            if($validator->fails()){
                throw new ValidationException($validator);
            }

            $title      = $request->get('title');
            $text       = $request->get('text');
            $userId     = $request->get('userId');
            $categoryArr    = $request->get('category');

            $insertedRecord = $this->ThreadService->add($title,$text,$userId,$categoryArr);

            $response = array(
                'status'    => 'success',
                'data'      => $insertedRecord,
                'message'   => 'category added successfully'
            );

            return response()->json($response, 201);

        }catch (ValidationException $exception) {
            $response = array(
                'status'    => 'error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, 400);

        }catch(\Exception $exception){
            $exceptionCode = ($exception->getCode()==0)?500:$exception->getCode();
            $message = $exception->getMessage();
            //$message = 'server error';
            $response = array(
                'status'    => 'error',
                'message'   => $message,
            );
            return response()->json($response, $exceptionCode);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{

            if(is_numeric ($id)){
                $id = intval($id);
            }else{
                throw new \Exception('The given data was invalid',400);
            }

            $thread = $this->ThreadService->view($id);

            if($thread){
                $response = array(
                    'status'    => 'success',
                    'data'      => $thread,
                    'message'   => ''
                );
                return response()->json($response, 200);
            }else{
                $response = array(
                    'status'    => 'error',
                    'data'      => null,
                    'message'   => 'Resource does not exist'
                );
                return response()->json($response, 404);
            }

        }catch (CustomException $e) {

            $response = array(
                'status'    => 'error',
                'message'   => $e->getMessage(),
            );
            return response()->json($response, $e->getCode());
        }catch (\Exception $e) {

            $response = array(
                'status'    => 'error',
                'message'   => 'Internal server error',
            );
            return response()->json($response, 500);
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{

            if(is_numeric ($id)){
                $id = intval($id);
            }else{
                throw new \Exception('The given data was invalid',400);
            }

            $validator = Validator::make($request->all(), [
                'title' => 'required',
                'text' => 'required',
                'category' => 'required',
                'userId' => 'required',
            ]);

            if($validator->fails()){
                throw new ValidationException($validator);
            }

            $title      = $request->get('title');
            $text       = $request->get('text');
            $userId     = $request->get('userId');
            $categoryArr    = $request->get('category');

            $updatedRecord = $this->ThreadService->update($title,$text,$userId,$categoryArr,$id);


            $response = array(
                'status'    => 'success',
                'data'      => $updatedRecord,
                'message'   => 'category updated successfully'
            );

            return response()->json($response, 200);

        }catch (ValidationException $exception) {
            $response = array(
                'status'    => 'error',
                'message'   => $exception->getMessage(),
            );
            return response()->json($response, 400);
        }catch(\Exception $exception){
            $exceptionCode = ($exception->getCode()==0)?500:$exception->getCode();
            $message = $exception->getMessage();
            //$message = 'server error';
            $response = array(
                'status'    => 'error',
                'message'   => $message,
            );
            return response()->json($response, $exceptionCode);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{

            if(is_numeric ($id)){
                $id = intval($id);
            }else{
                throw new \Exception('The given data was invalid',400);
            }

            $this->ThreadService->delete($id);
            $response = null;
            return response()->json($response, 204);


        }catch (\Exception $e) {

            $response = array(
                'status'    => 'error',
                'message'   => 'Internal server error',
            );
            return response()->json($response, 500);
        }

    }




}
