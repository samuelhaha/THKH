<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Hor;
use Illuminate\Support\Facades\DB;
use JWTAuth;



class RoleController extends Controller
{
    // protected $user;
 
    // public function __construct()
    // {
    //     $this->user = JWTAuth::parseToken()->authenticate();
    // }

    //staff - create report
    public function staffCreate(Request $request){
        $input = $request->only(
            'a_inccidentDate',
            'a_inccidentTime',
            'b_diagnosis',
            'c_affectedPerson',
            'c_affectedName',
            'c_affectedNrie',
            'c_affectedAddress',
            'c_affectedGender',
            'c_affectedContact',
            'c_affectedAge',
            'c_affectedAdmitDate',
            'c_affectedAdmitTime',
            'c_affectedWing',
            'c_affectedWard',
            'c_affectedBed',
            'c_witnessNrie',
            'c_witnessName',
            'c_witnessContact',
            'd_locationOccur',
            'd_occurSite',
            'd_occurWard',
            'd_occurWardWing',
            'd_occurBed',
            'd_site_other',
            'e_notifyDoc',
            'e_timeDoc',
            'e_nameDoc',
            'e_notifySup',
            'e_timeSup',
            'e_nameSup',
            'e_notifyPolice',
            'e_timePolice',
            'e_namePolice',
            'e_notifyRelative',
            'e_timeRelative',
            'e_nameRelative',
            'f_occurType',
            'f_fall_nearFall',
            'f_fall_injury',
            'f_fall_injury_type',
            'f_fall_injury_type_other',
            'f_fall_assessmentAdm',
            'f_fall_assessmentOccur',
            'f_fall_history',
            'f_fall_assisted',
            'f_fall_amt',
            'f_medi_error',
            'f_medi_error_other',
            'f_medi_drug',
            'f_medi_reach',
            'f_other_type',
            'f_other_details',
            'g_situation',
            'g_background',
            'g_action',
            'g_recommend',
            'g_description'
        );
        $result = Hor::insert(
            [
                'rs_id' => JWTAuth::user()->staff_id,
                'a_inccidentDate' => $request->a_inccidentDate,
                'a_inccidentTime' => $request->a_inccidentTime,
                'b_diagnosis' => $request->b_diagnosis,
                'c_affectedPerson' => $request->c_affectedPerson,
                'c_affectedName' => $request->c_affectedName,
                'c_affectedNrie' => $request->c_affectedNrie,
                'c_affectedAddress' => $request->c_affectedAddress,
                'c_affectedGender' => $request->c_affectedGender,
                'c_affectedContact' => $request->c_affectedContact,
                'c_affectedAge' => $request->c_affectedAge,
                'c_affectedAdmitDate' => $request->c_affectedAdmitDate,
                'c_affectedAdmitTime' => $request->c_affectedAdmitTime,
                'c_affectedWing' => $request->c_affectedWing,
                'c_affectedWard' => $request->c_affectedWard,
                'c_affectedBed' => $request->c_affectedBed,
                'c_witnessNrie' => $request->c_witnessNrie,
                'c_witnessName' => $request->c_witnessName,
                'c_witnessContact' => $request->c_witnessContact,
                'd_locationOccur' => $request->d_locationOccur,
                'd_occurSite' => $request->d_occurSite,
                'd_occurWard' => $request->d_occurWard,
                'd_occurWardWing' => $request->d_occurWardWing,
                'd_occurBed' => $request->d_occurBed,
                'd_site_other' => $request->d_site_other,
                'e_notifyDoc' => $request->e_notifyDoc,
                'e_timeDoc' => $request->e_timeDoc,
                'e_nameDoc' => $request->e_nameDoc,
                'e_notifySup'=> $request->e_notifySup,
                'e_timeSup' => $request->e_timeSup,
                'e_nameSup' => $request->e_nameSup,
                'e_notifyPolice' => $request->e_notifyPolice,
                'e_timePolice' => $request->e_timePolice,
                'e_namePolice' => $request->e_namePolice,
                'e_notifyRelative' => $request->e_notifyRelative,
                'e_timeRelative' => $request->e_timeRelative,
                'e_nameRelative' => $request->e_nameRelative,
                'f_occurType' => $request->f_occurType,
                'f_fall_nearFall' => $request->f_fall_nearFall,
                'f_fall_injury' => $request->f_fall_injury,
                'f_fall_injury_type' => $request->f_fall_injury_type,
                'f_fall_injury_type_other' => $request->f_fall_injury_type_other,
                'f_fall_assessmentAdm' => $request->f_fall_assessmentAdm,
                'f_fall_assessmentOccur' => $request->f_fall_assessmentOccur,
                'f_fall_history' => $request->f_fall_history,
                'f_fall_assisted' => $request->f_fall_assisted,
                'f_fall_amt' => $request->f_fall_amt,
                'f_medi_error' => $request->f_medi_error,
                'f_medi_error_other' => $request->f_medi_error_other,
                'f_medi_drug' => $request->f_medi_drug,
                'f_medi_reach' => $request->f_medi_reach,
                'f_other_type' => $request->f_other_type,
                'f_other_details' => $request->f_other_details,
                'g_situation' => $request->g_situation,
                'g_background' => $request->g_background,
                'g_action' => $request->g_action,
                'g_recommend' => $request->g_recommend,
                'g_description' => $request->g_description
            ]
            );
            if($result){
                return response()->json([
                    'code' => 200,
                    'success' => 'true',
                    'msg' => 'Record successfully created',
                    'record' => $input
                ]);
            }
            else{
                return response()->json([
                    'code' => 400,
                    'success' => 'false',
                    'msg' => 'Record failed to create',
                    'record' => ''
                ]);
            }
    }

    //supervisor
    // public function supervisor(Request $request)
    // {
    //     if (JWTAuth::user()->role != 'sup')
    //     {
    //     $input = $request->only('factors','recommendations','date','time');
        
    //     //$hor = Hor::insert('insert into hors (h_sp_factors,h_sp_recommend,h_sp_reportFile,sp_submit_datetime)')
    //     return response()->json([
    //         'success' => true,
    //         'msg' => 'Data added successfully',
    //         'data' => $input,
    //         'token' => $request->token,
    //         'user' => JWTAuth::user()
    //     ]);
    // }
    // else{
    //     return response(401)->json([
    //         'success' => false,
    //         'msg' => 'Unauthorized. You must be a supervisor to submit the form.'
    //     ]);
    // }
    
    // }

    // //doctor
    // public function doctor(Request $request)
    // {
    //     $input = $request->only('report','reportfile','date','time');
        
        
    //     return response()->json([
    //         'success' => true,
    //         'msg' => 'Data added successfully',
    //         'data' => $input
    //     ]);
    // }
}
