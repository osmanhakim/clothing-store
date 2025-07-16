<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Color extends Model
{
    use HasFactory , Translatable;


    protected $table = "colors";
    
    public $translatedAttributes = ['name'];

    protected $guarded = [];


}