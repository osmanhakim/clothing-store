<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GenderTranslation extends Model
{
    use HasFactory;

        protected $guarded = [];

        protected $table = "gender_translations";
        
        public $timestamps = false;
}