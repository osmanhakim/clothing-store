<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\NewsLetter;
use Illuminate\Database\Seeder;
use App\Models\ItemSize;
use App\Models\Audience;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(LaratrustSeeder::class);
        $this->call(AdminSeeder::class);
        $this->call(SettingSeeder::class);
        $this->call(SettingContactSeeder::class);
        $this->call(AudienceSeeder::class);
        $this->call(GenderSeeder::class);
        $this->call(ColorSeeder::class);
        $this->call(ItemSizeSeeder::class);
        $this->call(BrandSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(HotSeeder::class);
        $this->call(FeaturedSeeder::class);
        $this->call(startCategorySeeder::class);
//        NewsLetter::factory(6000)->create();
    }
}