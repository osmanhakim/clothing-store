<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HotProducts extends Model
{
    use HasFactory;
    
     protected $table = 'hot_products';

     protected $guarded = [];
    
     public $timestamps = false;
}