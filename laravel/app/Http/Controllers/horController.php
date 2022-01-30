<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Hor;
use Illuminate\Support\Facades\DB;
//use Illuminate\Support\Facades\Validator;
//use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use Illuminate\Support\Carbon as Carbon;
use Exception;
use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;
use Tymon\JWTAuth\JWTAuth as JWTAuthJWTAuth;

class horController extends Controller
{
    public function showreports()
    {
        $Hors = Hor::all();
        return response()->json([
            'Hors'=>$Hors,
        ]);
    }

    public function returnReport($id,Request $request)
    {
        //if(JWTAuth::user()->role != 'rps'){
        //$route_to = $request->route_to;
        $reason = $request->reason;
        $date = Carbon::now();
        $date->toDateTimeString();
        $report = Hor::where('id',$id)->update([
            'route_date_rps' => $date
        ]);
        return response()->json([
            'success'=>'true',
            'msg'=>'Returned report to staff',
            'reason'=>$reason,
            'report'=>$report
        ]);
    // }else{
    //     return response()->json([
    //         'msg'=>'You are not authorized to perform this action.'
    //     ],401);
    // }
    }
}