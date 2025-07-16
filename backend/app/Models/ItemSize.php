<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemSize extends Model
{
    use HasFactory;
    protected $table = 'itemSizes';

     protected $guarded = [];
    
         public $timestamps = false;

}