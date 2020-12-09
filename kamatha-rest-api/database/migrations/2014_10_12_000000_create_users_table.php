<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            //$table->string('name');
            $table->string('fullname');
            $table->string('email')->unique();
            //$table->timestamp('email_verified_at')->nullable();
            $table->string('password');

            $table->string('username');
            $table->enum('gender', [ 'male' , 'female']);
            $table->string('badge')->nullable();
            $table->integer('points')->default(0);
            $table->string('api_token', 60)->unique(); // Add api_token field



            //$table->rememberToken();
            $table->timestamps();
        });










        //$table->integer('deliver_method')->comment('0: seller delivery, 1: system delivery')->after('pickup_enable');



//        Schema::create('user_sms', function (Blueprint $table) {
//            $table->increments('id');
//            $table->integer('user_id')->default(0);
//            $table->integer('type_id')->comment('1:User registration, 2: Password reset, 3: Sms promotion, 4: Bank top-up, 5: Order approved');
//            $table->text('sms_content');
//            $table->integer('character_count');
//            $table->string('recipient_number')->nullable();
//            $table->integer('delivery_states')->comment('1: delivered, 0: non delivered');
//            $table->timestamps();
//        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
