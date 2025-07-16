<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    use HasFactory, Translatable;

    protected $guarded = [];
    
    protected $table = 'genders';
    
    public $translatedAttributes = ['name'];

    // protected $appends = ['image'];
}