<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class gender_translations extends Model
{
    use HasFactory;

     protected $table = 'gender_translations';

    public $timestamps = false;

    protected $guarded = [];

}