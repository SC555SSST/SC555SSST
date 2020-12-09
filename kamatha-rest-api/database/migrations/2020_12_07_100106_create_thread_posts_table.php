<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateThreadPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thread_posts', function (Blueprint $table) {
            $table->id();
            $table->text('post_text');
            $table->integer('thread_id');
            $table->integer('user_id');
            $table->integer('is_useful')->default(0)->comment = '0:Not useful, 1:Useful';
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('thread_posts');
    }
}
