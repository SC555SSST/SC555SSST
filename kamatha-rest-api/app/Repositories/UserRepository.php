<?php


namespace App\Repositories;
use App\Models\Category;
use App\Models\Post;
use  App\Models\Thread;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserRepository
{

    public function findUserById($id){
        return User::find($id);
    }

    public function findAll(){
        return User::all();
        //return Category::all();
    }

    public function add($userDetailsArr){
        try
        {
            $user = new User;

            $user->fullname = $userDetailsArr['fullname'];
            $user->email    = $userDetailsArr['email'];
            $user->password = $userDetailsArr['password'];
            $user->username = $userDetailsArr['username'];
            $user->gender   = $userDetailsArr['gender'];
            $user->badge    = $userDetailsArr['badge'];
            $user->save();
            $id = $user->id;

            return array('isInserted' =>true,'id'=>$id);

        }catch (\PDOException $e) {
            return array('isInserted' =>false,'id'=>null);
        }

    }

    public function updateById($userDetailsArr,$id){

        $selectedUser = $this->findUserById($id);
        try
        {
            $selectedUser->badge    =   $userDetailsArr['badge'];
            $selectedUser->points   =   $userDetailsArr['points'];
            $selectedUser->role_id  =   $userDetailsArr['role_id'];
            $selectedUser->save();

            return array('isUpdated' =>true,'id'=>$id);

        }catch (\PDOException $e) {
            return array('isUpdated' =>false,'id'=>null);
        }
    }

    public function deleteById($id){
        //return Post::destroy($id);
    }


    public function getThreadOwner(Thread $thread){
        return($thread->user);
    }


}
