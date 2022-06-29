<?php

namespace Database\Factories;

use App\Enums\PreRegister\Score;
use App\Enums\PreRegister\Status;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PreRegister>
 */
class PreRegisterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $status = $this->faker->boolean() ? Status::Approved : Status::Rejected;
        $phone = 031 . $this->faker->randomNumber(8);

        return [
            'first_name' => $this->faker->firstName('male'),
            'last_name' => $this->faker->lastName(),
            'father_name' => $this->faker->firstName('male'),
            'national_code' => $this->faker->numberBetween(1111111111, 9999999999),
            'mobile' => $this->faker->phoneNumber(),
            'phone' => $phone,
            'address' => $this->faker->address(),
            'seventh_math' => $this->faker->numberBetween(5, 20),
            'eighth_math' => $this->faker->numberBetween(5, 20),
            'ninth_math' => $this->faker->numberBetween(5, 20),
            'seventh_science' => $this->faker->numberBetween(5, 20),
            'eighth_science' => $this->faker->numberBetween(5, 20),
            'ninth_science' => $this->faker->numberBetween(5, 20),
            'seventh_discipline' => $this->faker->numberBetween(Score::Poor->value, Score::Excellent->value),
            'eighth_discipline' => $this->faker->numberBetween(Score::Poor->value, Score::Excellent->value),
            'ninth_discipline' => $this->faker->numberBetween(Score::Poor->value, Score::Excellent->value),
            'status' => $this->faker->boolean() ? Status::Pending : $status,
        ];
    }
}
