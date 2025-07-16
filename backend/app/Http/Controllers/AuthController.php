<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\UserSession;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {   
        try{
            // $validated = $request->validate([
            //     'first_name' => 'required|string|max:255',
            //     'last_name' => 'required|string|max:255',
            //     'email' => 'required|string|email|unique:users',
            //     'password' => 'required|string|confirmed', 'password' => 'required|string|confirmed',
            //     'mobile' => 'required|string',
            // ]);
         $validator = Validator::make($request->all(),[
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|string|confirmed',
                'mobile' => 'required|string',
         ]);

        if ($validator->fails()) {
        return response()->json([
            'status' => false,
            'errors' => $validator->errors()
        ], 422);
    }


            $user = User::create([
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'email' => $request['email'],
                'phone' => $request['mobile'],
                'password' => md5($request['password']),
                'mobile' => $request['mobile'],
            ]);

       
        
            $token1 = $user->createToken('auth_token')->plainTextToken;
            $token2 = $user->createToken('auth_token')->plainTextToken;

            $session = UserSession::create( [
                'userid'=>$user->id,
                'access_token' => $token1,
                // 'accessTokenEXP' => date(time()+(1*30*60)),
                'accessTokenEXP' => now()->addMinutes(30),
                'refresh_token' => $token2,
                // 'refreshTokenEXP' => date(time()+(10*60*60)),
                'refreshTokenEXP' => now()->addHours(10),
            ]);
        
            return response()->json([
                'user' => $user,
                'session' => $session,
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()],401);
            // print($e->getMessage());
        }
    } 

public function login(Request $request)
{   try {
     //dd($request);

    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);
        $user = User::where('email', $credentials['email'])->first();
       
        if (!$user ||(md5($credentials['password']) != $user->password)) {
           throw ValidationException::withMessages([
         'email' => ['The provided credentials are incorrect.'],
              ]);
             }
            $token1 = $user->createToken('auth_token')->plainTextToken;
            $token2 = $user->createToken('auth_token')->plainTextToken;
            
            $token1EXP = now()->addMinutes(30);
            $token2EXP = now()->addHours(10);

            $session = UserSession::updateOrCreate(
            ['userid' => $user->id],
            [
                'access_token' => $token1,
                'accessTokenEXP' => $token1EXP,
                'refresh_token' => $token2,
                'refreshTokenEXP' => $token2EXP,
            ]
        );
        return response()->json([
                'user' => $user,
                'session' => $session,
            ], 201);

} catch( \Exception $e) {
      return response()->json([
        'data' => $e->getMessage()
      ],400);
}
}

public function logout(Request $request)
{
    try {
        $token = $request->bearerToken();
        
        if (!$token) {
            return response()->json(['message' => 'Token not provided'], 401);
        }

        // 1. Delete from your custom sessions table
        $deleted = UserSession::where('access_token', $token)->delete();
        
        // 2. Clear Laravel's authentication
        Auth::logout();
        
        // 3. Clear session if using
        //$request->session()->invalidate();

        return response()->json([
            'message' => 'Successfully logged out',
            'session_deleted' => (bool)$deleted
        ]);

    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Logout completed with partial success',
            'error' => $e->getMessage()
        ], 200);
    }
}

    public function getUser(Request $request) {
         $user =  auth()->user();

        return json_encode(['user' => $user ,  'message' => 'User Data 2..']);
    }

}