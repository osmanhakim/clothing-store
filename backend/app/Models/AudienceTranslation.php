<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AudienceTranslation extends Model
{
    use HasFactory;

        protected $guarded = [];

        protected $table = "audience_translations";
        
        public $timestamps = false;


}