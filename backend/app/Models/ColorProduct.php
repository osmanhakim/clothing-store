<?php

namespace App\Models;

use App\Traits\Files\HasFiles;
use App\Traits\Files\HasFile;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColorProduct extends Model
{
    use HasFactory, HasFile , HasFiles;

    protected $table = 'color_products';

    protected $guarded = [];

    public $timestamps = true;

}