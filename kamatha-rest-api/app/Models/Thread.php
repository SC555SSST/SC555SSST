<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Thread extends Model
{
    use HasFactory, SoftDeletes;
    protected $table = 'threads';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'title',
        'text',
        'user_id'
    ];


    public function categories(){
        return $this->belongsToMany(
            'App\Models\Category',
            'thread_category',
            'thread_id',
            'category_id'
        );
    }


}
