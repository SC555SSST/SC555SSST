<?php


namespace App\Services;


use App\Exceptions\CustomException;
use App\Models\Category;
use App\Repositories\CategoryRepository;
use App\Repositories\ThreadRepository;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Validator;

class CategoryService
{
    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository) {
        $this->categoryRepository = $categoryRepository;
    }

    public function view($categoryId){
        return $this->categoryRepository->findById($categoryId);
    }

    public function viewAll(){
        return $this->categoryRepository->findAll();
    }

    public function add($categoryName){
        //check if already exist in database
        $isExist = $this->categoryRepository->findByCategoryName($categoryName);

        if($isExist->count() > 0){
            throw new \Exception('category name already exist',409);
        }else{
            $insertedResult = $this->categoryRepository->add($categoryName);

            if($insertedResult['isInserted']){
                return new Category([
                    'id' => $insertedResult['id'],
                    'category_name' => $categoryName,
                ]);
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }

    public function update($categoryName,$categoryId){

        $isExist = $this->categoryRepository->findByCategoryName($categoryName);

        if($isExist==null){
            throw new \Exception('Resource does not exist',404);
        }else{
            $isUpdated = $this->categoryRepository->updateById($categoryName,$categoryId);

            if($isUpdated){
                return array([
                     'id' => $categoryId,
                     'category_name' => $categoryName,

                ]);
            }else{
                throw new \PDOException('Failed to insert into database',500);
            }
        }
    }

    public function delete($categoryId){
        return $this->categoryRepository->deleteById($categoryId);
    }


    public function getThreadsBelongToCategory($id){
        $category = $this->categoryRepository->findById($id);
        if($category == null){
            throw new CustomException('Resource does not exist',404);
        }else{

            $belongThreads =  $this->categoryRepository->findThreadsByCategory($category);

            if(empty($belongThreads))
            {
                return $belongThreads;
                //throw new CustomException('Resource does not exist', 404);
            }else{
                $arr = array();
                foreach($belongThreads as $belongThread){

                    //get categories
                    $threadRepo = new ThreadRepository();
                    $catArr     = $threadRepo->findThreadCategories($belongThread);

                    //get userinfo
                    $userRepo = new UserRepository();
                    $userInfo = $userRepo->findUserById($belongThread->user_id);


                    if(empty($userInfo)){
                        $userInfoArr = array();
                    }else{
                        $userInfoArr = array(
                            'username'    =>$userInfo->username,
                            'points'      =>$userInfo->points,
                            'id'          =>$userInfo->id,
                            'account_type'=>$userInfo->role->role_name,
                        );
                    }
                    $arr[] =    array(
                        'id'            => $belongThread->id,
                        'title'         => $belongThread->title,
                        'text'          => $belongThread->text,
                        'user'          => $userInfoArr,
                        'categories'    => $catArr
                    );
                }
            }
                return $arr;
        }
















    }
}
