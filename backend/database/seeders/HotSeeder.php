<?php

namespace Database\Seeders;

use App\Models\HotProducts;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
       $list = [2,7,15,41];
       
       for ($i = 0;$i < count($list); $i++) {
           HotProducts::create(['coloredProduct_id' => $list[$i]]);
       }
    }
}