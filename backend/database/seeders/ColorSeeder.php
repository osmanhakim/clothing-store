<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Color;
class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $codes = ['#000','#fff','#0a2472','#d7bb4f', '#282828','#b1d6e8','#9c7539','#d29b48','#e6ae95','#d76b67','#bababa','#bfdcc4','#C2B280','#A52A2A','#8B807E','#000080','#FFC0CB','#add8e6'];
        $namesAr = ['اسود','ابيض','أزرق داكن','ذهبي غامق','رمادي فاحم','أزرق سماوي فاتح','بني جلدي','عسلي','وردي فاتح','احمر هندي','رمادي','اخضر فاتح','اكرو','بني','منكي','بحري','وردي','ازرق فاتح'];
        $namesEn = ['black','white', 'Dark blue','Goldenrod','Jet','Light Sky Blue','Saddle Brown','Tan','Light Salmon','soft red','Grey','Tea Green','Ecru','brown','mink','navy','pink','light blue'];

       for ($i =0; $i < count($codes) ; $i++) {
           Color::Create([
            'ar' => [
              'name' => $namesAr[$i]
            ],
            'en' => [
              'name' => $namesEn[$i]
            ],
            'code' => $codes[$i]
           ]);
       }
    }
}