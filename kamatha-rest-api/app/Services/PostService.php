<?php


namespace App\Services;


use App\Exceptions\CustomException;
use App\Models\Category;
use App\Models\Thread;
use App\Repositories\CategoryRepository;
use App\Repositories\PostRepository;
use App\Repositories\ThreadRepository;
use Illuminate\Support\Facades\Validator;

class PostService
{
    private $postRepository;
    private $threadRepository;

    public function __construct(PostRepository $postRepository,ThreadRepository $threadRepository) {
        $this->postRepository = $postRepository;
        $this->threadRepository  = $threadRepository;
    }

    public function view($id){

        $post = $this->postRepository->findById($id);
        if(!$post){
            throw new CustomException('Resource does not exist',404);
        }else{
            $thread         = $this->postRepository->findPostBelongThread($id);
            if($thread->count() == 0){
                throw new CustomException('Resource does not exist',404);
            }else{
                $postInfo = array(
                    'id'            => $post->id,
                    'post_text'     => $post->post_text,
                    'thread_id'     => $post->thread_id,
                    'user_id'       => $post->user_id,
                    'is_useful'     => $post->is_useful
                );
                return $postInfo;
            }
        }
    }

    public function viewByThread(){


    }

    public function add($text,$userId,$threadId){

            $threadRepository = new ThreadRepository();
            if($threadRepository->findById($threadId) == null){
                throw new CustomException('Selected thread does not exist',400);
            }

            $insertedResult = $this->postRepository->add($text,$userId,$threadId);

            if($insertedResult['isInserted']){

                return array([
                    'id'          => $insertedResult['id'],
                    'post_text'   => $text,
                    'user_id'     => $userId,
                    'thread_id'   => $threadId,
                    'is_useful'   => false
                ]);

            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
    }

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

}
