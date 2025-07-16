<?php

use App\Http\Controllers\API\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AuthController;
use App\Models\FeaturedProducts;

/// ✅ جلب بيانات المستخدم الحالي
Route::middleware('api.login')->group(function () {
    Route::get('/user', function (Request $request) {
    return '<p>it works</p>';
    })->name('home');
    Route::POST('/address',[HomeController::class,'addAddress']);
    Route::GET('/address',[HomeController::class,'getAddress']);
    Route::DELETE('/address/{id}',[HomeController::class,'deleteAddress']);
    Route::GET('/address/{id}',[HomeController::class,'getAddressById']);
    Route::PATCH('/address/{id}',[HomeController::class,'updateAddressById']);
    Route::GET('/accountdetails',[HomeController::class,'getAccountDetails']);
    Route::PATCH('/accountdetails',[HomeController::class,'updateAccountDetails']);
    Route::GET('/userInfo',[AuthController::class,'getUser']);
    Route::GET('/session',[HomeController::class,'isValidSession']);

});
    Route::GET('/logout',[AuthController::class, 'logout']);

Route::middleware('api.auth')->group(function () {

Route::post('/register', [AuthController::class, 'register']);
// ✅  
Route::post('/login', [AuthController::class, 'login']);

Route::GET('/categories', [HomeController::class,'getCategories']);

Route::GET('/hot',[HomeController::class,'getHotProducts']);

Route::GET('/featured/{id}',[HomeController::class,'LoadPagination']);

Route::GET('/loadStart',[HomeController::class,'loadStart']);

Route::GET('/details/{id}',[HomeController::class,'getProductById']);

//public function getProductSize($cp_id) {

Route::GET('/itemSizes/{itemId}',[HomeController::class,'getProductSize']);

Route::GET('/product/{id}',[HomeController::class,'getProductSizedById']);

Route::GET('/cardItemDetials/{id}',[HomeController::class,'getCardItemDetails']);

});
/// ✅ تسجيل مستخدم جديد

    Route::group(['middleware' => ['api.login','api.auth']], function () { //secure user resources

    });

// Route::middleware('auth:sanctum')->GET('/logout', [AuthController::class, 'logout']);



Route::middleware('api.login')->group(function () {
});