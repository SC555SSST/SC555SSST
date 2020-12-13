<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $gender = $this->faker->randomElement(['male', 'female']);

        return [
            'fullname'  => $this->faker->name($gender),
            'email'     => $this->faker->unique()->safeEmail,
            //'email_verified_at' => now(),
            'password'  => '$2y$10$2h5giDh76838fngLtoBLYelhO/zJ7SCzT/ZFSjdW2/w0C.AD/cCDS', // password
            //'remember_token' => Str::random(10),
            'username'  => $this->faker->userName,
            'api_token' => null,
            'gender'    => $gender,
            'role_id'   => $this->faker->randomElement([2,3,4]),
            'points'    => $this->faker->numberBetween($min = 0, $max = 5000),
            'badge'     => $this->faker->randomElement(['Beginner', 'Novice','Creator','Master',])

        ];







    }
}
