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

    public function showreportsbyuser()
    {
        $id = JWTAuth::user()->staff_id;
        $role = JWTAuth::user()->role;
        if ($role == 'rps') {
            $Hors = Hor::where('rs_id', $id)->get();      
        } else  if ($role == 'sup') {
            $Hors = Hor::where('sp_id', $id)->get();
        } else if ($role == 'doc') {
            $Hors = Hor::where('dt_id', $id)->get();
        } else  if ($role =='pha') {
            $Hors = Hor::where('ph_id', $id)->get();
        } else if ($role == 'hod') {
            $Hors = Hor::where('hod_id', $id)->get(); 
        } else  if ($role == 'hpo') {
            $Hors = Hor::where('hpo_id', $id)->get();
        } else  if ($role == 'dms') {
            $Hors = Hor::where('dms_id', $id)->get();
        }
        return response()->json([
            'Hors'=>$Hors,
        ]);
    }

    public function getReports()
    {
        $id = JWTAuth::user()->staff_id;
        $role = JWTAuth::user()->role;
        //get report based on rs_id from hors table
        if ($role == 'rps') {
            $report = Hor::where('rs_id', $id)->get();
        } else {
            //need to look at this again
            $report = Hor::where('status_' . $role, '<>', 'returned')->orWhereNotNull('status_' . $role)->get();
        }
        //$report = Hor::all();
        return response()->json([
            'msg' => 'success',
            'reports' => $report
        ]);
    }

    public function getReportByHorNum($horNum)
    {
        $report = Hor::where('horNum', $horNum)->first();
        return response()->json([
            'msg' => 'success',
            'report' => $report
        ]);
    }

    //need to look at this again
    public function returnReport($id,Request $request)
    {
        //if(JWTAuth::user()->role != 'rps'){
        //$route_to = $request->route_to;
        $reason = $request->reason;
        $date = Carbon::now();
        $date->toDateTimeString();
        $report = Hor::where('id',$id)->update([
            'void_reason' => $reason, //using void_reason column for now //add new column to database?
            'route_date_rps' => $date,
            'status_rps' => 'returned'
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

    public function removeReport($horNum){
        $report = Hor::where('horNum', $horNum)->first();
        $result=$report->delete();
        if($result){
            return response()->json([
                'success'=>'true',
                'msg'=>'Report successfully deleted!',
            ]);
        }
        else{
            return response()->json([
                'success'=>'false',
                'msg'=>'Failed to delete report',
            ]);
        }
        
    }
}