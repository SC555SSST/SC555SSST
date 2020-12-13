<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\models\Thread;
class ThreadTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //factory(::class,2)->create();
        Thread::factory()
            ->times(5)
            ->create();
    }
}
