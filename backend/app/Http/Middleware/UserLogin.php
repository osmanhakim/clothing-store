<?php

namespace App\Http\Middleware;

use App\Models\User;
use App\Models\UserSession;
use Closure;
use DateTime;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class UserLogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
  public function handle(Request $request, Closure $next)
{
    $token = $request->bearerToken();
    
    if (!$token) {
        return response()->json([
            'message' => 'Token not provided',
            'code' => '401' // Use proper HTTP status
        ], 401);
    }

    $userSession = UserSession::where('access_token', $token)->first();
    
    if (!$userSession) {
        return response()->json([
            'message' => 'Invalid session',
            'code' => '401'
        ], 401);
    }

    // Check token expiration
    if (now()->gt($userSession->accessTokenEXP)) {
        return response()->json([
            'message' => 'Token expired',
            'code' => '401'
        ], 401);
    }

    // Manually authenticate user
    Auth::loginUsingId($userSession->userid);
    
    // Attach session to request for Sanctum compatibility
    $request->setUserResolver(function () use ($userSession) {
        return User::find($userSession->userid);
    });

    return $next($request);
}
}