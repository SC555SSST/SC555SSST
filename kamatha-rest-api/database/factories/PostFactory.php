<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $rr = $this->faker->numberBetween(100,1000);
        return [
            //
            'post_text' => $this->faker->realText($rr),
            'thread_id' => $this->faker->randomDigitNotNull,
            'user_id'   => $this->faker->randomDigitNotNull,
            'is_useful' => $this->faker->boolean( 50),

        ];
    }
}
