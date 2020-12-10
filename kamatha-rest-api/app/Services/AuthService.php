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

class AuthService
{
    private $postRepository;
    private $threadRepository;
    private $userRepository;

    public function __construct(PostRepository $postRepository,
                                ThreadRepository $threadRepository,
                                UserRepository $userRepository
                                ) {
        $this->postRepository = $postRepository;
        $this->threadRepository  = $threadRepository;
        $this->userRepository  = $userRepository;
    }



    public function viewByThread(){


    }

    public function add($userDetailsArr){

            $insertedResult = $this->userRepository->add($userDetailsArr);

            if($insertedResult['isInserted']){

                return array([
                    'id'             => $insertedResult['id'],
                    'fullname'       => $userDetailsArr['fullname'],
                    'email'          => $userDetailsArr['email'],
                    'username'       => $userDetailsArr['username'],
                    'gender'         => $userDetailsArr['gender'],
                    'badge'          => $userDetailsArr['badge'],
                    'points'         => 0,
                    'account_type'   => $userDetailsArr['account_type'],     //3 or 4
                ]);

            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
    }

    //not use
    /*
    public function update($text,$userId,$threadId,$isUseful,$id){
        $isPostExist = $this->postRepository->findById($id);
        if($isPostExist==null){
            throw new \Exception('Resource does not exist',404);
        }else{

            $updateResult = $this->postRepository->updateById($text,$userId,$threadId,$isUseful,$id);
            if($updateResult['isUpdated']){
                return array([
                    'id'            => $id,
                    'post_text'     => $text,
                    'thread_id'     => $threadId,
                    'user_id'       => $userId,
                    'is_useful'     => $isUseful
                ]);
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }

    public function delete($postId){
        $deleteResult = $this->postRepository->deleteById($postId);
    }
    */

}
