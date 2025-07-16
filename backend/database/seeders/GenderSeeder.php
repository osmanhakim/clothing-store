<?php

namespace Database\Seeders;

use App\Models\Gender;
use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        //
        $gender = ['male','female','unisex'];
        $genderAr = ['ذكر','أنثى','للجنسين'];
       for ($i = 0 ; $i < count($gender); $i++) {
            Gender::Create([
                'en' => [
                    'name' => $gender[$i],
                ],
                'ar' => [
                    'name' => $genderAr[$i]
                ]
            ]);
       }
        
    }

}