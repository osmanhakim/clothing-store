<?php

namespace App\Models;

use App\Traits\Files\HasFile;
use App\Traits\Files\HasFiles;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory, Translatable, HasFile, HasFiles;

    protected $table = 'products';

    protected $guarded = [];

    protected $appends = ['image'];

    public $translatedAttributes = ['name'];

    public $timestamps = true;

    // relations start
    public function category(){
        return $this->belongsTo(Category::class);
    }
    // relations end
     
     public function images($product_id) {
       $rows = File::where('filable_type', '',\App\Models\Product::class)->where('filable_id',$product_id)->get();
       print_r($rows);
       return $rows;
     }
    // Scopes start
    public function scopeActive($query)
    {
        return $query->where('status', 1);
    }
    // Scopes end

    // accessors & Mutator start
    public function getImageAttribute()
    {
        $image = $this->files->where('type', 'image')->first();
        return $image ? $image->path : asset('uploads/default_image.png');
    }

    public function getActive()
    {
        return $this->status == 1 ? __('words.active') : __('words.inactive');
    }
    // accessors & Mutator end
}