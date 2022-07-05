<?php

namespace Database\Factories;

use App\Enums\PreRegister\Score;
use App\Enums\PreRegister\Status;
use Illuminate\Database\Eloquent\Factories\Factory;
use ReflectionClass;

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
        $statusRef = new ReflectionClass(Status::class);
        $status = $statusRef->getConstants();
        $status = array_rand($status);
        $status = $statusRef->getConstant($status);

        $scoreRef = new ReflectionClass(Score::class);
        $score = $scoreRef->getConstants();

        $phone = 031 .$this->faker->randomNumber(8);

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
            'seventh_grade' => $this->faker->numberBetween(5, 20),
            'eighth_grade' => $this->faker->numberBetween(5, 20),
            'ninth_grade' => $this->faker->numberBetween(5, 20),
            'seventh_discipline' => $scoreRef->getConstant(array_rand($score)),
            'eighth_discipline' => $scoreRef->getConstant(array_rand($score)),
            'ninth_discipline' => $scoreRef->getConstant(array_rand($score)),
            'status' => $status->value,
        ];
    }
}
