<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ClientResource;
use App\Http\Resources\CounterResource;
use App\Http\Resources\FeatureResource;
use App\Http\Resources\PageResource;
use App\Http\Resources\SliderResource;
use App\Models\Address;
use App\Models\Client;
use App\Models\Counter;
use App\Models\Category;
use App\Models\Color;
use App\Models\Feature;
use App\Models\Page;
use App\Models\Slider;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ColorProduct;
use App\Models\FeaturedProducts;
use App\Models\HotProducts;
use App\Models\productColor;
use App\Models\startCategory;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\ColorProductSize;
use PhpOffice\PhpSpreadsheet\Calculation\MathTrig\Exp;
use App\Models\ItemSize;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Models\User;
class HomeController extends Controller
{
    private $slider;
    private $page;
    private $feature;
    private $counter;
    private $client;

    public function __construct(Slider $slider, Page $page, Feature $feature, Counter $counter, Client $client)
    {
        $this->slider = $slider;
        $this->page = $page;
        $this->feature = $feature;
        $this->counter = $counter;
        $this->client = $client;
    }

    public function __invoke(Request $request)
    {
        try {
            $data['sliders'] = SliderResource::collection($this->slider->active()->latest('id')->get());
            $data['pages'] = PageResource::collection($this->page->get());
            $data['features'] = FeatureResource::collection($this->feature->active()->latest('id')->get());
            $data['counters'] = CounterResource::collection($this->counter->active()->latest('id')->get());
            $data['clients'] = ClientResource::collection($this->client->active()->latest('id')->get());
            return successResponse($data, 'success', 200);
        } catch (\Exception $e) {
            return failureResponse(__("message.something_wrong"), 'error', 400);
        }
    }

     public function getCategories() {
     $cats =  Category::all();
     return response()->json(['data' => $cats, 'code' => 200]);
    }

    public function getHotProducts() {
        // $products = Product::orderBy('price')->limit(4)->get();
        $coloredproducts = [];
        $all =  HotProducts::all();
        foreach($all as $hot) {
//dd($hot);
          $cp =  ColorProduct::find($hot->coloredProduct_id);
          array_push($coloredproducts, $cp);
        }
        //$coloredproducts = HotProducts::all();
        // $products = Product::orderBy('price', 'ASC')->limit(4)->get();
        // $products = [];
        // $res =  DB::select('SELECT * FROM `products` order by price ASC limit 4');
       // dd($res);
        $list = [];
        foreach($coloredproducts as $colorProd) {
           // dd($colorProd);
        //   $product = ColorProduct::where('product_id',$prod->id)->first();
              $product = Product::where('id',$colorProd->product_id)->get();
          if ($product) {
          $item = ['product' => $product , 'image' => $colorProd->files];
          array_push($list,$item);
          }
        //    $colored = products
        }
        return response()->json(['code'=>'200','data'=> $list]);
    }

    public function getProductSize($cp_id) {
      $colorProductSizes = ColorProductSize::where('color_product_id',$cp_id)->get();
      $sizes = [];
      foreach($colorProductSizes as $prodcolorsize) {
       $a = ItemSize::where('id',$prodcolorsize->size_id)->first();
       $q = $prodcolorsize->quantity;
       if($q != 0)
       $sizes [] = ['id' => $prodcolorsize->id , 'size' => $a,'quantity' => $q];
      }
      return response()->json(['data' => $sizes]);
    }


    public function getFeaturedProducts () {
        $featurs = FeaturedProducts::paginate(8);
        $colors = [];
        foreach($featurs as $f) {
        $item = ColorProduct::find($f->coloredProduct_id);
        $product= Product::find($item->product_id);
        $colorIDS = ColorProduct::where('product_id',$product->id)->get();
        $myColor = [];
        foreach ($colorIDS as $color) {
        $c = Color::find($color->id);
        $myColor[] = ['name' => $c->name,'code' => $c->code];
        }
        $obj = ['image'=>$item->files,'product'=>$product,'colors' => $myColor];
        array_push($colors,$obj);
        }
        
        return response()->json(['code' => 200 , 'data' => $colors]);
    }

    public function LoadPagination($id=1) {
         $limit = 8;
         $num = $id*$limit;         
         $result = DB::select('select * from featured_products limit '.$num.'');
         $colors = [];
         foreach($result as $res) {
         $item = ColorProduct::find($res->coloredProduct_id);
         $product= Product::find($item->product_id);
         $colorIDS = ColorProduct::where('product_id',$product->id)->get();
         // adding all colordProductsImgs 
           $imgs = [];
           foreach ($colorIDS as $colorid)
           $imgs [] = $colorid->files;

         //
        $myColor = [];
        foreach ($colorIDS as $color) {
        $c = Color::find($color->color_id);
        //dd($c);
        $myColor[] = ['id' => $c->id , 'name' => $c->name,'code' => $c->code];
        }
         $obj = ['image'=>$imgs,'product'=>$product,'colors' => $myColor];
         array_push($colors,$obj);
         }  
         $loadMore = true;
         $max = FeaturedProducts::max('id');
         $newNum = ($id+1)*$limit;
         if ($newNum >$max)
         $loadMore = false;
         return response()->json(['code' => 200 , 'data' => $colors,'loadMore' => $loadMore]);
    }

    public function loadStart() {
        $start =  startCategory::all(); 
        $list  =  [];
        foreach($start as $item) {
           $cat = Category::find($item->category_id);
           $productColor = ColorProduct::find($item->coloredProduct_id);
             // Debugging nulls
        if (!$cat) {
            Log::error("Category not found for ID: " . $item->category_id);
            continue;
        }

        if (!$productColor) {
            Log::error("ColorProduct not found for ID: " . $item->coloredProduct_id);
            continue;
        }
           $image = $productColor->files;
           array_push($list,['name' => $cat->name , 'image' => $image, 'price' => $item->price]);
        }
        return response()->json(['code'=> '200' ,'data' => $list]);
    }

       public function getProductById($id) {
        try {
       $product =  ColorProduct::findOrFail($id); 
       $imgs = [];
         foreach ($product->files as $file) {
            $imgs[] = $file->path;
         }
         $prod = Product::find($product->product_id);
         return response()->json(['imgs' => $imgs , 'data' => $prod],201);
        } catch(Exception $ex) {
          return response()->json(['data' => 'error while loading the details'],400);
        }
    }

        public function getProductSizedById($id) {
         $item = ColorProductSize::find($id);
          if($item) {
            return response()->json(['data' => $item],200);
          }
           response()->json(['data' => 'Not Found'],404);
        }

        public function getCardItemDetails($id) {
               $sizes = [1  => 'XS', 2 => 'S' , 3 => 'M' , 4 => 'L', 5 =>'XL', 6 => 'XXL'];
               try {
               $item = ColorProductSize::find($id);
               if (!$item)
               return response()->json(['data' => 'item not found '], 404);
               $color_product_id = $item->color_product_id;
               $sizeName = $sizes[$item->size_id];
               $colordProduct = ColorProduct::find($color_product_id);
               $imgs =  $colordProduct->files[0];
               $colorId = $colordProduct->color_id;
               $color = Color::find($colorId);
               $colorName = $color->name;
               $productId = $colordProduct->product_id;
               $product = Product::find($productId);
               $productName = $product->name;
               $productPrice = $product->price;
               return response()->json([
                'productName' => $productName , 
                 'price' => $productPrice,
                 'color' => $colorName,
                 'size' => $sizeName,
                 'photo' => $imgs
               ]);
             } catch (Exception $ex) {
              return response()->json(['data' => $ex->getMessage()]);
             }
        }

        

public function addAddress(Request $request)
{
    try {
        $validated = $request->validate([
            'full_name' => 'required|min:8',
            'city' => 'required',
            'state' => 'required',
            'street_address' => 'required',
            'zip' => 'required|min:5|max:5',
            'phone_number' => 'required|min:10|numeric',
            'country' => 'required',
        ]);
          
           $address = Address::create([
        'user_id' => Auth::id(),
        'full_name' => $validated['full_name'],
        'city' => $validated['city'],
        'state' => $validated['state'],
        'zip' => $validated['zip'],
        'street_address' => $validated['street_address'],
        'phone_number' => $validated['phone_number'],
        'country' => $validated['country'],
    ]);

    return response()->json(['data' => $address], 201);

    
    } catch (ValidationException $ex) {
        return response()->json(['error' => $ex->getMessage()], 400);
    }

}

public function getAccountDetails() {
     $id = Auth::id();
     $user = User::find($id);
     $name = $user->first_name.' '.$user->last_name;
     //  dd($address);
     return response()->json([
      'name' => $name,
      'number' => $user?->phone,
      'email' => $user->email,
     ],200);
}

public function getAddress() {
    $id = Auth::id();
     $addresses= Address::where('user_id',$id)->get();
     $arr = [];
     foreach($addresses as $addr) 
     $arr[] = $addr;

     return response()->json(['data' => $arr]);
}

public function getAddressById($id) {
  try {
   $userId = Auth::id();
   $address = Address::find($id);
   if ($address->user_id != $userId) 
   throw('not authorized action'); 
   return response()->json(['data' => $address],201);
  } catch(Exception $ex) {
     return response()->json(['data'=> $ex->getMessage()],400);
  }
}

public function updateAddressById($id, Request $request) {
     try {
     $id = Auth::id();
     $address = Address::find($id);
     if ($address->user_id != $id) 
     throw('not authorized action'); 
    //  return response()->json(['data' => $address],201);
    $validated = $request->validate([
      'full_name' => 'required',
      'city' => 'required',
      'state' => 'required',
      'zip' => 'required|numeric,min:5|max:5',
      'street_address' => 'required',
      'country' => 'required',
      'phone_number' => 'required|min:8|max:15'
    ]);

    $address->full_name = $validated['full_name'];
    $address->city = $validated['city'];
    $address->state = $validated['state'];
    $address->zip = $validated['zip'];
    $address->street_address = $validated['street_address'];
    $address->country = $validated['country'];
    $address->phone_number = $validated['phone_number'];
    $address->save();
    return response()->json(['data' => $address]);
     } catch(Exception $ex) {
     return response()->json(['data'=> $ex->getMessage()],400);
   }
}

public function updateAccountDetails(Request $request) {
   try {
     $id = Auth::id();
     $user = User::find($id);
     $address = Address::where('user_id',$id)->first();
     $rules_obj =       [
        'name'=> 'required',
        'email'=> 'required',
        'mobile' => 'required|numeric',
     ];
      $matched = false;
      if ($request['old_password']) {
      // check password
      if (md5($request['old_password']) == $user->password) {
      $rules_obj['old_password'] = "required";
      $rules_obj['new_password'] = 'required|min:8|confirmed';
      $matched = true;
      }
     }
      $validated = $request->validate($rules_obj);
      $arr = explode(" ",$validated['name']);
   //  dd($address);
      $first_name= $arr[0];
      $last_name = isset($arr[1]) ? $arr[1] : '';
      $password = $user->password;
      if ($matched)
      $password = md5($validated['new_password']);
      $email  =  $validated['email'];
      $user->first_name = $first_name;
      $user->last_name = $last_name;
      $user->email = $email;
      $user->password = $password;
      $user->save();
      $address->phone_number =$validated['mobile'];
      $address->save();
    } catch(Exception $ex) {
      return response()->json(['data' => $ex->getMessage()],400);    }
      return response()->json([
     'first_name' => $user->first_name,
      'last_name' => $user->last_name,
      'email' => $user->email,
      'mobile' => $address->phone_number,
     ],200);
}

public function deleteAddress($id) {
      $userId = Auth::id();
      $address = Address::find($id);
      if ($address->user_id == $userId){ 
     // Address::delete($id);
      $address->delete();
      return response()->json(['data' => 'address deleted successfully'],200);
      }
      return response()->json(['data' => 'error while trying to deleted address'],400);

}
public function isValidSession(Request $request){
  try {
    $userId = Auth::id();
    return response()->json(['data' => $userId]);
  }
  catch(Exception $ex) {
    return response()->json(['data' => $ex->getMessage()]);
  }
}

}