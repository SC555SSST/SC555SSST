<?php

namespace App\Http\Middleware;

use App\Models\Thread;
use App\Repositories\UserRepository;
use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ModifyThreads
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(Auth::guard()->check()){

            $roleName = Auth::guard()->user()->role->role_name;

            //if user role belongs to admin level then pass request
            if($roleName == 'super_admin' || $roleName =='admin'){
                return $next($request);
            }else{
                $threadId = $request->route('thread');
                $thread = Thread::find($threadId);

                if($thread != null){
                    //check time diff in minutes
                    $timeDiff = Carbon::now('Asia/Colombo')->diffInMinutes($thread->created_at);

                    //get thread owner email
                    $userRepository = new UserRepository();
                    $threadOwner = $userRepository->getThreadOwner($thread);

                    if($threadOwner != null){
                        $threadOwnerEmail = $threadOwner->email;
                        $userEmail = Auth::guard()->user()->email;

                        /*
                        * check if is this request from post owner AND
                        * Thread created time not exceed 1Hr from now on then pass request
                       */
                        if(($timeDiff < 60) && ($userEmail == $threadOwnerEmail)){
                            return $next($request);
                        }
                    }

                    return response()->json([
                        'status' => 'Error',
                        'message' => 'You do not have permission to access'
                    ],401);

                }else{
                    //thread is not in db
                    return response()->json([
                        'status' => 'Error',
                        'message' => 'Resource does not exist'
                    ],400);
                }
            }

        }else{
            return response()->json(['status' => 'Error','message' => 'You cannot Access this service'],401);
        }
    }
}
