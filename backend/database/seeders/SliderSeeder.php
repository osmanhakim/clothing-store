<?php

namespace Database\Seeders;

use App\Models\Slider;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SliderSeeder extends Seeder
{
    public function run()
    {
        $images = ['1.jpg', '2.png', '3.jpg'];
        $titles = ['شبكات الإنترنت', 'البيوت الذكية ونظم حماية الطاقة', 'أنظمة لإطفاء الحريق'];
        $head = [];
        for ($s = 0; $s < count($titles); $s++) {
            $slider = Slider::create([
                'ar' => [
                    'title' => $titles[$s],
                    
                ],
                'status' => 1
            ]);
            $slider->file()->create([
                'path' => 'seeders/sliders/' . $images[$s],
                'type' => 'image'
            ]);
        }
    }
}