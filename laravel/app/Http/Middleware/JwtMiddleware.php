<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtMiddleware extends BaseMiddleware
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    // public function handle($request, Closure $next)
    // {
    //     try {
    //         $user = JWTAuth::parseToken()->authenticate();
    //     } catch (Exception $e) {
    //         if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
    //             return response()->json(['status' => 'Token is Invalid']);
    //         }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
    //             return response()->json(['status' => 'Token has Expired']);
    //         }else{
    //             return response()->json(['status' => 'Authorization Token not found']);
    //         }
    //     }
    //     return $next($request);
    // }
    public function handle($request, Closure $next)
    {
        if($jwt = $request->cookie(key: 'jwt'))
        {
            $request->headers->set(key: 'Authorization', values: 'Bearer ' . $jwt);
        }

        $this->authenticate($request);
        // $newToken = null;
        // $this->auth->unsetToken();
        // $this->checkForToken($request);
        // try {
        //     $user = $this->auth->parseToken()->authenticate();
        //     if (!$user) {
        //         return response()->json([
        //             'status_code' => 401,
        //             'message'=>' the user information is not found ',
        //             'time'=> time(),
        //         ], 401);
        //     }
        // } catch (TokenExpiredException $e) {
        //     try {
            
        //         $newToken = $this->auth->refresh();

        //         $request->headers->set('Authorization', 'Bearer ' . $newToken); 
        //     } catch (JWTException $e) {
        //         //Expired users
        //         return response()->json([
        //             'status_code' => 401,
        //             'message' =>' account information expired, please login again ',
        //             'error'=> $e->getMessage(),
        //             'time'=> time(),
        //         ], 401);
        //     }
        // } catch (JWTException $e) {
        //     return response()->json([
        //         'status_code' => 401,
        //         'message' => 'login information has expired, please log in again. ',
        //         'error'=> $e->getMessage(),
        //         'time' => time(),
        //     ], 401);
        // }
         $response = $next($request);

        // if ($newToken) {
        //     $response->headers->set('Authorization', 'Bearer ' . $newToken);
        // }
        return $response;
    }
}