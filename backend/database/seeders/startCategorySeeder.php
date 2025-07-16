<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\startCategory;
class startCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //chosen Categories admin can alter this in dashboard 
        $cats = [13,7];
        $coloredProducts = [6,33];
        $prices = [25,15];
        for ($i=0;$i<count($cats);$i++) {
            startCategory::create([
             'category_id' => $cats[$i] , 
             'coloredProduct_id' => $coloredProducts[$i],
             'price' => $prices[$i]
          ]);
        }
    }
}