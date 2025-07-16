<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Gender;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      //   'Jackets','Jeans','Trousers','Jumpers & Cardigans' to add later
      //   $audiance = [1,2,1,1,1,1,2,1,2,1,2,1,1,1];
      //   $genders  = [2,1,1,2,1,2,1,2,2,1,1,1,1,1];
        $catNames =   ['Tops','Pants','Clothes','Jeans','Shirts','Shoes','Dresses','Sweatshirts','Swimwear','Trousers','Jumpers & Cardigans','accessories','t-shirt','skirts','Blazers','Sportswear','shorts','coat','JUMPSUIT'];
        $catNamesAr = ['قمصان','سراويل','ملابس','جينز','قمصان','أحذية','فساتين','كنزات','ملابس سباحة','سراويل','كنزات وقمصان','إكسسوارات','تي-شيرت','تنورة' , 'بليزر','ملابس رياضية','سروال قصير','معطف','جمبسوت'];
        for ($i = 0;$i<count($catNames);$i++) {
           $cat = Category::Create([
             'en' => [
                'name' => $catNames[$i]
             ],
             'ar' => [
                'name' => $catNamesAr[$i]
             ],
            ]);   


            
            // assets\images\products
            $arr = ['path' => 'categories/'.($i+1).'/image.jpg'];
            $path = str_replace('//','/',$arr['path']);
            $cat->file()->create([
                'path' => $path,
                'type' => 'image'
            ]);
         
    }
}

}