<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColorTranslation extends Model
{
    use HasFactory;

      protected $table = 'color_translations';


    protected $guarded = [];

    public $timestamps = false;


}