<?php

namespace App\Models;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class startCategory extends Model
{   
    use HasFactory;

    protected $table = 'start_categories';

    public $timestamps = false;

    protected $guarded = [];

}