<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Product;
use App\Models\Color;
use App\Models\ProductSize;
use App\Models\ItemSize;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use App\Models\ColorProductSize;
use App\Models\ColorProduct;
use App\Models\ColorTranslation;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names = ['STWD Studio','Basic short sleeve cotton T-shirt','Short sleeve STWD T-shirt','STWD Studio T-shirt','Basic short sleeve cotton T-shirt','TEXTURED KNIT POLO SHIRT','WOOL SUIT BLAZER','COMFORT SUIT BLAZER','WESTERN DENIM SHIRT','JACQUARD STRIPED SHIRT','ZIPPER POLO SHIRT','TEXTURED STRETCH SHIRT','T-SHIRT WITH CONTRAST PATCH','SLOGAN PRINT TANK TOP','BASIC MID-LENGTH SWIMMING TRUNKS','SEERSUCKER MEDIUM SWIMMING SUIT'];
        $namesAr = ['تي-شيرت STWD ستوديو','تي شيرت قطني أساسي بأكمام قصيرة','تي شيرت STWD بأكمام قصيرة','تي شيرت STWD Studio','تي شيرت قطني أساسي بأكمام قصيرة','قميص بولو محبوك','سترة بدلة صوفية','سترة بدلة مريحة','قميص جينز غربي','قميص جاكار مخطط','قميص بولو بسحاب','قميص مطاطي محكم','تي شيرت مع رقعة متباينة','تيشرت TANK بنص مطبع','شورت سباحة أساسي متوسط ​​الطول','ملابس سباحة متوسطة الحجم من قماش سيرساكر'];
        $category = [13,13,13,13,13,5,15,15,5,5,13,5,13,1,9,9];
        $genders = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        $audiences = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        $prices = [20,20,30,20,32,70,100,70,100,65,65,70,22,16,10,15];

        $sizes = ItemSize::all();

        foreach ($names as $index => $name) {
            // Create product
            $prod = Product::create([
                'category_id' => $category[$index],
                'audience_id' => $audiences[$index],
                'gender_id' => $genders[$index],
                'price' => $prices[$index],
                'en' => ['name' => $name],
                'ar' => ['name' => $namesAr[$index]]
            ]);

            $productId = $index + 1;
            $basePath = public_path("uploads/products/adult/male/{$productId}");

            $this->command->info("Processing product ID: {$productId}");

            if (!File::exists($basePath)) {
                $this->command->warn("⚠️ Folder not found for product ID: {$productId}");
                continue;
            }

            $colorFolders = File::directories($basePath);
            $colorNames = array_map('basename', $colorFolders);

            foreach ($colorNames as $color) {
                $path = $basePath.'/'.$color;
                $photos = File::files($path);
                $finalPhotos = [];

                foreach ($photos as $photo) {
                    $relativePath = str_replace(
                        [public_path(), 'uploads'],
                        ['', ''],
                        $photo->getPathname()
                    );

                    $finalPhotos[] = [
                        'type' => 'image',
                        'path' => $relativePath,
                    ];
                }

                app()->setLocale('en');
                $colorDB = ColorTranslation::where('name',"$color")->first();
                if(!$colorDB)
                $colorDB = ColorTranslation::where('name','like',"%$color")->first();
                if(!$colorDB)
                $colorDB = ColorTranslation::where('name','like',"$color%")->first();
                if(!$colorDB)
                $colorDB = ColorTranslation::where('name','like',"%$color%")->first();
                if ($colorDB) {
                    $coloredProduct = ColorProduct::create([
                        'product_id' => $prod->id,
                        'color_id' => $colorDB->color_id
                    ]);

                    $coloredProduct->files()->createMany($finalPhotos);

                    foreach ($sizes as $size) {
                        ColorProductSize::create([
                            'color_product_id' => $coloredProduct->id,
                            'size_id' => $size->id,
                            'quantity' => rand(1, 6)
                        ]);
                    }
                }
            }
        }
    

//######################### adult women #####################

         $names = ['WASHED CAP SLEEVE T-SHIRT','WASHED-EFFECT SLEEVELESS T-SHIRT','SHORT SLEEVE INTERLOCK T-SHIRT','BASIC COTTON T-SHIRT','ASYMMETRIC FLOWING SKIRT','ZW COLLECTION RUFFLED SKIRT','Fitted midi dress','Women\'s White Creased-Effect Midi Dress','Asymmetric midi dress','Puff Sleeve Midi Dress','CROPPED SHORT SLEEVE - Basic T-shirt','Strappy heeled sandals','FLARE Z1975 JEANS WITH A HIGH WAIST','ZW COLLECTION WIDE-LEG HIGH-WAIST JEANS'];
         $namesAr = ['تي شيرت بأكمام قصيرة مغسولة','تيشرت دون أكمام بمظهر مغسول','تيشرت INTERLOCK بأكمام قصيرة','تيشرت قطني بيزك','تنورة متدفقة غير متماثلة','تنورة بفريلز ZW COLLECTION','فستان ميدي مجسم','فستان ميدي بمظهر مجعد','فستان ميدي غير متماثل','فستان ميدي بأكمام منفوخة','تي شيرت أساسي بأكمام قصيرة','صندل بأشرطة وكعب','JEANS Z1975 FLARE بخصر عالٍ','JEANS ZW COLLECTION WIDE LEG بسرج عال'];
         $category = [13,13,13,13,14,14,7,7,7,7,13,6,4,4];
         $genders = [2,2,2,2,2,2,2,2,2,2,2,2,2,2];
         $audiences = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
         $prices = [40,45,40,15,30,35,120,110,130,133,22,45,66,59];

       $sizes = ItemSize::all();

        foreach ($names as $index => $name) {
            // Create product
            $prod = Product::create([
                'category_id' => $category[$index],
                'audience_id' => $audiences[$index],
                'gender_id' => $genders[$index],
                'price' => $prices[$index],
                'en' => ['name' => $name],
                'ar' => ['name' => $namesAr[$index]]
            ]);

            $productId = $index + 1;
            $basePath = public_path("uploads/products/adult/female/{$productId}");

            $this->command->info("Processing product ID: {$productId}");

            if (!File::exists($basePath)) {
                $this->command->warn("⚠️ Folder not found for product ID: {$productId}");
                continue;
            }

            $colorFolders = File::directories($basePath);
            $colorNames = array_map('basename', $colorFolders);

            foreach ($colorNames as $color) {
                $path = $basePath.'/'.$color;
                $photos = File::files($path);
                $finalPhotos = [];

                foreach ($photos as $photo) {
                    $relativePath = str_replace(
                        [public_path(), 'uploads'],
                        ['', ''],
                        $photo->getPathname()
                    );

                    $finalPhotos[] = [
                        'type' => 'image',
                        'path' => $relativePath,
                    ];
                }

                app()->setLocale('en');
                $colorDB = ColorTranslation::where('name', 'like', "%{$color}%")->first();

                if ($colorDB) {
                    $coloredProduct = ColorProduct::create([
                        'product_id' => $prod->id,
                        'color_id' => $colorDB->color_id
                    ]);

                    $coloredProduct->files()->createMany($finalPhotos);

                    foreach ($sizes as $size) {
                        ColorProductSize::create([
                            'color_product_id' => $coloredProduct->id,
                            'size_id' => $size->id,
                            'quantity' => rand(1, 6)
                        ]);
                    }
                }
                
            }
        }

            //######################### kids boys ##################### 
        $names = ['LOOSE FIT DENIM BERMUDA SHORTS','FELT TEXTURE COAT','STRIPED LINEN BLEND TROUSERS','SLIM BASIC CHINO PANTS','TEXT DETAIL ZIPPERED SWEATSHIRT','PIQUÉ INTERLOCK JOGGERS','FLEECE JOGGER BERMUDA SHORTS','FALL GUYS © PRINTED T-SHIRT','TOMATO PRINT T-SHIRT','FAST & FURIOUS © PRINT T-SHIRT','LINEN-COTTON SHIRT','LINEN COTTON MANDARIN COLLAR SHIRT','LINEN BLEND SHIRT WITH STAND COLLAR','6-14 YEARS/ POKÉMON™ SWIM SHORTS','6-14 YEARS/ PALM TREE SWIM SHORTS'];
        $namesAr = ['شورت برمودا جينز فضفاض','معطف من نسيج اللباد','بنطلون مخطط من الكتان','بنطال تشينو أساسي ضيق','سويت شيرت بسحاب وكتابة','بنطلون JOGGER INTERLOCK بيكيه','برمودا قطيفة JOGGING','تيشيرت بطبعة FALL GUYS ©','تيشرت بطبعة طماطم','تيشرت بطبعة FAST & FURIOUS ©','قميص قطن وكتان','قميص قطن كتان بياقة شريطية','قميص من الكتان بياقة شريطية','6-14 سنة/ برمودا للسباحة بوكيمون ™','6-14 سنة/ برمودا سباحة بنخلة'];
        $category = [17,18,2,2,8,2,18,17,13,13,13,5,5,5,9,9];
        $genders = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
        $audiences = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
        $prices = [25,45,35,29,30,25,19,19,17,25,25,32,32,25,22];

        
       $sizes = ItemSize::all();

        foreach ($names as $index => $name) {
            // Create product
            $prod = Product::create([
                'category_id' => $category[$index],
                'audience_id' => $audiences[$index],
                'gender_id' => $genders[$index],
                'price' => $prices[$index],
                'en' => ['name' => $name],
                'ar' => ['name' => $namesAr[$index]]
            ]);

            $productId = $index + 1;
            $basePath = public_path("uploads/products/kids/male/{$productId}");

            $this->command->info("Processing product ID: {$productId}");

            if (!File::exists($basePath)) {
                $this->command->warn("⚠️ Folder not found for product ID: {$productId}");
                continue;
            }

            $colorFolders = File::directories($basePath);
            $colorNames = array_map('basename', $colorFolders);

            foreach ($colorNames as $color) {
                $path = $basePath.'/'.$color;
                $photos = File::files($path);
                $finalPhotos = [];

                foreach ($photos as $photo) {
                    $relativePath = str_replace(
                        [public_path(), 'uploads'],
                        ['', ''],
                        $photo->getPathname()
                    );

                    $finalPhotos[] = [
                        'type' => 'image',
                        'path' => $relativePath,
                    ];
                }

                app()->setLocale('en');
                $colorDB = ColorTranslation::where('name', 'like', "%{$color}%")->first();

                if ($colorDB) {
                    $coloredProduct = ColorProduct::create([
                        'product_id' => $prod->id,
                        'color_id' => $colorDB->color_id
                    ]);

                    $coloredProduct->files()->createMany($finalPhotos);

                    foreach ($sizes as $size) {
                        ColorProductSize::create([
                            'color_product_id' => $coloredProduct->id,
                            'size_id' => $size->id,
                            'quantity' => rand(1, 6)
                        ]);
                    }
                }
            }
        }


                    //######################### kids girls ##################### 
        $names = ['RIPPED DENIM SHORTS','RAISED TEXT PLUSH SHORTS','CUT OUT KNOT PRINT DRESS','STRIPED CROPPED SHIRT AND DRESS SET','SCHIFFLI EMBROIDERED DRESS','PRINTED DRESS','DRESS WITH CUT-OUT RUFFLES','SWISS EMBROIDERED SHORT JUMPSUIT','TEXTURED DRESS','CROPPED BLAZER WITH BOW'];
        $namesAr = ['برمودا DENIM ستايل ممزق','برمودا قطيفة بنص بارز','فستان مطبع بعقدة CUT OUT','حزمة فستان وقميص CROPPED بخطوط','فستان بتطريزات شيفلي','فستان مطبع','فستان بقصات وفريلز','جمبسوت قصير بتطريز سويسري','فستان هيكلي','BLAZER CROPPED بربطة'];
        $category = [17,17,7,7,7,7,7,19,7,15];
        $genders = [2,2,2,2,2,2,2,2,2,2];
        $audiences = [2,2,2,2,2,2,2,2,2,2];
        $prices = [25,15,39,40,45,22,35,49,45,49];

              $sizes = ItemSize::all();

        foreach ($names as $index => $name) {
            // Create product
            $prod = Product::create([
                'category_id' => $category[$index],
                'audience_id' => $audiences[$index],
                'gender_id' => $genders[$index],
                'price' => $prices[$index],
                'en' => ['name' => $name],
                'ar' => ['name' => $namesAr[$index]]
            ]);

            $productId = $index + 1;
            $basePath = public_path("uploads/products/kids/female/{$productId}");

            $this->command->info("Processing product ID: {$productId}");

            if (!File::exists($basePath)) {
                $this->command->warn("⚠️ Folder not found for product ID: {$productId}");
                continue;
            }

            $colorFolders = File::directories($basePath);
            $colorNames = array_map('basename', $colorFolders);

            foreach ($colorNames as $color) {
                $path = $basePath.'/'.$color;
                $photos = File::files($path);
                $finalPhotos = [];

                foreach ($photos as $photo) {
                    $relativePath = str_replace(
                        [public_path(), 'uploads'],
                        ['', ''],
                        $photo->getPathname()
                    );

                    $finalPhotos[] = [
                        'type' => 'image',
                        'path' => $relativePath,
                    ];
                }

                app()->setLocale('en');
                $colorDB = ColorTranslation::where('name', 'like', "%{$color}%")->first();

                if ($colorDB) {
                    $coloredProduct = ColorProduct::create([
                        'product_id' => $prod->id,
                        'color_id' => $colorDB->color_id
                    ]);

                    $coloredProduct->files()->createMany($finalPhotos);

                    foreach ($sizes as $size) {
                        ColorProductSize::create([
                            'color_product_id' => $coloredProduct->id,
                            'size_id' => $size->id,
                            'quantity' => rand(1, 6)
                        ]);
                    }
                }
            }
        }

    }
}