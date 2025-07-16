<?php

namespace Database\Seeders;

use App\Models\Aud;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Audience;
class AudienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $audio = ['adults','kids'];
        $audioAr = ['كبار','اطفال'];
        for ($i = 0; $i < count($audio);$i++){
        Audience::Create([
                'en' => [
                    'name' => $audio[$i],
                ],
                 'ar' => [
                    'name' => $audioAr[$i]
                 ]
        ]        
                 );

     
    }
    }
}