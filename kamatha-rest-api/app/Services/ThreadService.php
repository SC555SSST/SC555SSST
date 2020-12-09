<?php


namespace App\Services;


use App\Exceptions\CustomException;
use App\Models\Category;
use App\Models\Thread;
use App\Repositories\CategoryRepository;
use App\Repositories\ThreadRepository;
use Illuminate\Support\Facades\Validator;

class ThreadService
{
    private $threadRepository;
    private $categoryRepository;

    public function __construct(ThreadRepository $threadRepository,CategoryRepository $categoryRepository) {
        $this->threadRepository = $threadRepository;
        $this->categoryRepository  = $categoryRepository;
    }

    public function view($threadId){
        $thread         = $this->threadRepository->findById($threadId);
        if($thread ===null){
            throw new CustomException('Resource does not exist',404);
        }
        $threadCatArr   = $this->threadRepository->findThreadCategories($thread);

        $threadInfo = array(
            'id'            => $thread->id,
            'title'         => $thread->title,
            'text'          => $thread->text,
            'user_id'       => $thread->user_id,
            'categories'    => $threadCatArr
        );
        return $threadInfo;

    }

    public function viewAll(){
        $threads =  $this->threadRepository->findAll();
        $threadArr = array();

        foreach ($threads as $thread){
            $arr = $this->threadRepository->findThreadCategories($thread);

            $threadArr[] = array(
                'id'            => $thread->id,
                'title'         => $thread->title,
                'text'          => $thread->text,
                'user_id'       => $thread->user_id,
                'categories'    => $arr
            );
        }

        return $threadArr;

    }

    public function add($title,$text,$userId,$categoryArr){

        //check if already exist in database
        $isExist = Thread::where('title', $title)->get();

        if($isExist->count() > 0){
            throw new \Exception('Thread name already exist',409);
        }else{
            $insertedResult = $this->threadRepository->add($title,$text,$userId,$categoryArr);

            if($insertedResult){

                $catArr = $this->categoryRepository->findMany($categoryArr);
                $arr = array();
                foreach ($catArr as $cat){
                    $arr[] = array('id'=>$cat->id,'category_name'=>$cat->category_name);
                }

                return array([
                    'id'            => $insertedResult['id'],
                    'title'         => $title,
                    'text'          => $text,
                    'user_id'       => $userId,
                    'categories'    => $arr
                ]);
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }

    public function update($title,$text,$userId,$categoryArr,$id){

        $updatedResult = $this->threadRepository->updateById($title,$text,$userId,$categoryArr,$id);

        if($updatedResult==null){
            throw new \Exception('Resource does not exist',404);
        }else{

            $catArr = $this->categoryRepository->findMany($categoryArr);
            //dd($catArr);
            $arr = array();
            foreach ($catArr as $cat){
                $arr[] = array('id'=>$cat->id,'category_name'=>$cat->category_name);
            }

            if($updatedResult['isUpdated']){
                return array([
                    'id'            => $id,
                    'title'         => $title,
                    'text'          => $text,
                    'user_id'       => $userId,
                    'categories'    => $arr
                ]);
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }

    public function delete($threadId){
        $deleteResult = $this->threadRepository->deleteById($threadId);

        if($deleteResult==false){
            throw new CustomException('Internal server error',504);
        }
        //todo delete associated posts also
    }

}
