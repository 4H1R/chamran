<?php

namespace Database\Seeders;

use App\Models\Major;
use App\Models\PreRegister;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $majors = Major::factory(5)->create();
        for ($i = 0; $i < 50; $i++) {
            PreRegister::factory()->create([
                'major_id' => $majors->random()->id,
            ]);
        }
    }
}
