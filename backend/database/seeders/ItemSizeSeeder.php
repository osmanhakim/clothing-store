<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ItemSize;
class ItemSizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $size = ['XS','S','M','L','XL','XXL'];
        for ($i=0;$i<count($size);$i++) {
             ItemSize::Create([
                'size' => $size[$i]
             ]);
        }
    }
}