<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class UserSession extends Model
{
    use HasFactory,HasApiTokens;

    protected $table = "user_sessions";



//     protected $fillable = [
//     'userid',
//     'access_token',
//     'accessTokenEXP',
//     'refresh_token',
//     'refreshTokenEXP',
// ];


    protected $guarded = [];
}