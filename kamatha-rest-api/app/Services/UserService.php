<?php


namespace App\Services;


use App\Exceptions\CustomException;
use App\Models\Category;
use App\Models\Thread;
use App\Repositories\CategoryRepository;
use App\Repositories\PostRepository;
use App\Repositories\ThreadRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Validator;

class UserService
{
    private $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository  = $userRepository;
    }

    public function view($id){

        $user = $this->userRepository->findUserById($id);

        if(!$user){
            throw new CustomException('Resource does not exist',404);
        }else{
             return array([
                 'id'             => $user->id,
                 'fullname'       => $user->fullname,
                 'email'          => $user->email,
                 'username'       => $user->username,
                 'gender'         => $user->gender,
                 'badge'          => $user->badge,
                 'points'         => $user->points,
                 'account_type'   => $user->role->role_name
             ]);
        }
    }

    public function viewAll(){

        $users = $this->userRepository->findAll();


        if($users->count ()==0){
            throw new CustomException('Resource does not exist',404);
        }else{

            $arr = array();
            foreach($users as $user){
                $arr[] = array([
                            'id'             => $user->id,
                            'fullname'       => $user->fullname,
                            'email'          => $user->email,
                            'username'       => $user->username,
                            'gender'         => $user->gender,
                            'badge'          => $user->badge,
                            'points'         => $user->points,
                            'account_type'   => $user->role->role_name
                        ]);
            }
            return $arr;
        }
    }

    public function update($userDetailsArr,$id){
        $selectedUser = $this->userRepository->findUserById($id);
        if($selectedUser==null){
            throw new \Exception('Resource does not exist',404);
        }else{

            $updateResult = $this->userRepository->updateById($userDetailsArr,$id);
            if($updateResult['isUpdated']){
                return array([
                    'id'             => $id,
                    'fullname'       => $selectedUser->fullname,
                    'email'          => $selectedUser->email,
                    'username'       => $selectedUser->username,
                    'gender'         => $selectedUser->gender,
                    'badge'          => $userDetailsArr['badge'],
                    'points'         => $userDetailsArr['points'],
                    'account_type'   => $userDetailsArr['account_type']
                ]);
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }

    public function changePw($pass,$userId){
        $user = $this->userRepository->findUserById($userId);
        if(empty($user)){
            throw new CustomException('User does not exist',400);
        }
        $isUpdated = $this->userRepository->updateUserPass($user,$pass);
        if(!$isUpdated){
            throw new CustomException('Internal Server Error',500);
        }
    }

    public function getUserRole($userId){
        $user = $this->userRepository->findUserById($userId);
        if(empty($user)){
            return false;
        }else{
            return $user->role->role_name;
        }
    }

}
