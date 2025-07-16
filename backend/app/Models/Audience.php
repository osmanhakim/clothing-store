<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audience extends Model
{
    use HasFactory , Translatable;
    
    protected $table = "audiences";

    public $translatedAttributes = ['name'];
    
    protected $guarded = [];

}