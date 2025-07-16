<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordred_product extends Model
{
    use HasFactory;

     protected $table = 'Ordered_products';

     protected $guarded = [];
    
     public $timestamps = true;
}