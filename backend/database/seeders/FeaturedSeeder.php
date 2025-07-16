<?php

namespace Database\Seeders;

use App\Models\ColorProduct;
use App\Models\FeaturedProducts;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FeaturedSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $list = [];
        $max = ColorProduct::max('id');
        for ($i = 0;$i < $max;$i++) { 
          $max = ColorProduct::max('id');
          $elemId = rand(1,$max);
          while(in_array($elemId,$list))
          $elemId = rand(1,$max);
          FeaturedProducts::create(['coloredProduct_id' => $elemId]);
        }

    }
}