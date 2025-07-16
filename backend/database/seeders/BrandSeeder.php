<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // ['', , ,  ,, 'Levi\'s']
 
        $list = ['Nike','Adidas','H&M','Gap','Forever 21','Balmain','Balenciaga','Burberry','Uniqlo','Kenzo','Givenchy','Zara','Pull&Bear','American Eagle','Puma','Levi\'s'];

        for ($i = 0; $i < count($list); $i++) {
            
            Brand::Create([
                'name' => $list[$i]
            ]);
        }
    }
}