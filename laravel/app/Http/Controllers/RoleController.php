<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Hor;
use DateTime;
use Illuminate\Support\Facades\DB;
use JWTAuth;
use Validator;
use Tymon\JWTAuth\Facades\JWTAuth as FacadesJWTAuth;
use Illuminate\Support\Carbon as Carbon;
use Tymon\JWTAuth\JWTAuth as JWTAuthJWTAuth;

class RoleController extends Controller
{
    // protected $user;

    // public function __construct()
    // {
    //     $this->user = JWTAuth::parseToken()->authenticate();
    // }

    //staff - create report
    public function staffCreate(Request $request)
    {
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
                'e_notifySup' => $request->e_notifySup,
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
        if ($result) {
            return response()->json([
                'code' => 200,
                'success' => 'true',
                'msg' => 'Record successfully created',
                'record' => $input
            ]);
        } else {
            return response()->json([
                'code' => 400,
                'success' => 'false',
                'msg' => 'Record failed to create',
                'record' => ''
            ]);
        }
    }

    

    public function staffSave($id, Request $request)
    {
        $date = Carbon::now();
        $date->toDateTimeString();
        if (JWTAuth::user()->role == 'rps') {
            $updateData = Hor::where('id', $id)->update([
                // 'rs_id' => JWTAuth::user()->staff_id,
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
                'e_notifySup' => $request->e_notifySup,
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
                'g_description' => $request->g_description,
                'save_date_rps' => $date,
                'status_rps' => 'saved',
            ]);
        } else if (JWTAuth::user()->role == 'sup') {
            $updateData = Hor::where('id', $id)->update([
                'h_sp_factors' => $request->h_sp_factors,
                'h_sp_recommend' => $request->h_sp_recommend,
                'h_sp_reportFile' => $request->h_sp_reportFile,
                'save_date_sup' => $date,
                'status_sup' => 'saved',
            ]);
        } else if (JWTAuth::user()->role == 'doc') {
            $updateData = Hor::where('id', $id)->update([
                'i_dt_report' => $request->i_dt_report,
                'i_dt_reportFile' => $request->i_dt_reportFile,
                'save_date_doc' => $date,
                'status_doc' => 'saved',
            ]);
        } else if (JWTAuth::user()->role == 'pha') {
            $updateData = Hor::where('id', $id)->update([
                'j_ph_comments' => $request->j_ph_comments,
                'j_ph_result' => $request->j_ph_result,
                'j_ph_phase' => $request->j_ph_phase,
                'j_ph_index' => $request->j_ph_index,
                'j_ph_index_other' => $request->j_ph_index_other,
                'save_date_pha' => $date,
                'status_pha' => 'saved',
            ]);
        } else if (JWTAuth::user()->role == 'hod') {
            $updateData = Hor::where('id', $id)->update([
                'k_hod_comments' => $request->k_hod_comments,
                'save_date_hod' => $date,
                'status_hod' => 'saved',
            ]);
        } else if (JWTAuth::user()->role == 'hpo') {
            $updateData = Hor::where('id', $id)->update([
                'l_hpo_comments' => $request->l_hpo_comments,
                'l_hpo_outcome' => $request->l_hpo_outcome,
                'save_date_hpo' => $date,
                'status_hpo' => 'saved',
            ]);
        } else if (JWTAuth::user()->role == 'dms') {
            $updateData = Hor::where('id', $id)->update([
                'm_dms_comments' => $request->m_dms_comments,
                'm_dms_verdict' => $request->m_dms_verdict,
                'save_date_dms' => $date,
                'status_dms' => 'saved',
            ]);
        }
        if ($updateData) {
            return response()->json([
                'code' => 200,
                'success' => 'true',
                'msg' => 'Record successfully updated',
                'record' => $updateData
            ]);
        } else {
            return response()->json([
                'code' => 400,
                'success' => 'false',
                'msg' => 'Record failed to update',
                'record' => ''
            ]);
        }
    }


    public function search(Request $request)
    {
        $data = Hor::where("c_affectedName", "LIKE", "%{$request->name}%")->get();

        return response()->json([
            'reports' => $data
        ]);
    }


    //supervisor
    //add his part to the form
    public function supervisorAdd($id, Request $request)
    {
        if (JWTAuth::user()->role == 'sup') {
            $date = Carbon::now();
            $date->toDateTimeString();
            //$input = $request->only('h_sp_factors','h_sp_recommend','h_sp_reportFile','date','time');
            $validator = Validator::make($request->all(), [
                'h_sp_reportFile' => 'mimes:pdf,jpeg,jpg,png|max:2048'
            ]);
            // $request->validate([
            //     'h_sp_reportFile' => 'mimes:pdf,jpeg,jpg,png|max:2048',
            // ]);
            if ($validator->passes()) {
                $input['h_sp_reportFile'] = time() . '_' . $request->file('h_sp_reportFile')->getClientOriginalName();
                $path = $request->h_sp_reportFile->move(public_path('files'), $input['h_sp_reportFile']);
                //$datetime = $request->date . $request->time;
                $addToRecord = Hor::where('id', $id)->update([
                    'h_sp_factors' => $request->h_sp_factors,
                    'h_sp_recommend' => $request->h_sp_recommend,
                    'h_sp_reportFile' => $input['h_sp_reportFile'],
                    'sp_submit_datetime' => $date,
                    'sp_id' => JWTAuth::user()->staff_id,
                    'status_sup' => 'submitted',
                ]);
                if ($addToRecord) {
                    return response()->json([
                        'success' => true,
                        'msg' => 'Supervisor record added successfully',
                        'uploaded_image' => '<img src="/files/'.$input['h_sp_reportFile'],
                        'data' => $addToRecord,
                    ]);
                }
            }
        } else {
            return response()->json([
                'success' => false,
                'msg' => 'You are not authorized to perform this action',
            ], 401);
        }
    }

    //doctor
    //add his part to the form
    public function doctorAdd($id, Request $request)
    {
        if (JWTAuth::user()->role == 'doc') {
            $date = Carbon::now();
            $date->toDateTimeString();
            //$input = $request->only('report','reportfile','date','time');
            $validator = Validator::make($request->all(), [
                'i_dt_reportFile' => 'mimes:pdf,jpeg,jpg,png|max:2048'
            ]);
            // request()->validate([
            //     'i_dt_reportFile' => 'mimes:pdf,jpg,jpeg,png|max:2048'
            // ]);
            //$datetime = $request->date . $request->time;
            if ($validator->passes()) {
                $input['i_dt_reportFile'] = time() . '_' . $request->file('i_dt_reportFile')->getClientOriginalName();
                $path = $request->i_dt_reportFile->move(public_path('files'), $input['i_dt_reportFile']);

                $addToRecord = Hor::where('id', $id)->update([
                    'i_dt_report' => $request->i_dt_report,
                    'i_dt_reportFile' => $request->i_dt_reportFile,
                    'dt_submit_datetime' => $date,
                    'dt_id' => JWTAuth::user()->staff_id,
                    'status_doc' => 'submitted',

                ]);



                return response()->json([
                    'success' => true,
                    'msg' => 'Doctor record added successfully',
                    'uploaded_image' => '<img src="/files/'.$input['i_dt_reportFile'],
                    'data' => $addToRecord
                ]);
            }
        } else {
            return response()->json([
                'success' => false,
                'msg' => 'You are performing an unauthorized action',
            ], 401);
        }
    }


    //pharmacy
    //add his part to the form
    public function pharmacyAdd($id, Request $request)
    {
        $date = Carbon::now();
        $date->toDateTimeString();
        if (JWTAuth::user()->role == 'pha') {
            //$datetime = $request->date . $request->time;
            $addToRecord = Hor::where('id', $id)->update([
                'j_ph_result' => $request->j_ph_result,
                'j_ph_phase' => $request->j_ph_phase,
                'ph_submit_datetime' => $date,
                'ph_id' => JWTAuth::user()->staff_id
            ]);

            return response()->json([
                'success' => true,
                'msg' => 'Pharmacy record added successfully',
                'data' => $addToRecord
            ]);
        } else {
            return response()->json([
                'success' => false,
                'msg' => 'Sorry, you are unauthorized to perform the action',
            ], 401);
        }
    }

    public function hodAdd($id, Request $request)
    {
        if (JWTAuth::user()->role == 'hod') {
            $date = Carbon::now();
            $date->toDateTimeString();
            $result = Hor::where('id', $id)->update([
                'k_hod_comments' => $request->k_hod_comments,
                'hod_submit_datetime' => $date,
                'hod_id' => JWTAuth::user()->staff_id
            ]);

            return response()->json([
                'success' => true,
                'msg' => 'HOD record added successfully',
                'data' => $result
            ]);
        } else {
            return response()->json([
                'success' => false,
                'msg' => 'Sorry, you are unauthorized to perform the action',
            ], 401);
        }
    }


    public function hpoAdd($id, Request $request)
    {
        if (JWTAuth::user()->role == 'hpo') {
            $date = Carbon::now();
            $date->toDateTimeString();
            $result = Hor::where('id', $id)->update([
                'l_hpo_comments' => $request->l_hpo_comments,
                'l_hpo_outcome' => $date,
                'hpo_submit_datetime' => $date,
                'hpo_id' => JWTAuth::user()->staff_id
            ]);

            return response()->json([
                'success' => true,
                'msg' => 'HPO record added successfully',
                'data' => $result
            ]);
        } else {
            return response()->json([
                'success' => false,
                'msg' => 'Sorry, you are unauthorized to perform the action',
            ], 401);
        }
    }

    public function dmsAdd($id, Request $request)
    {
        if (JWTAuth::user()->role == 'dms') {
            $date = Carbon::now();
            $date->toDateTimeString();
            $result = Hor::where('id', $id)->update([
                'm_dms_comments' => $request->m_dms_comments,
                'm_dms_verdict' => $request->m_dms_verdict,
                'dms_submit_datetime' => $date,
                'dms_id' => JWTAuth::user()->staff_id
            ]);

            return response()->json([
                'success' => true,
                'msg' => 'DMS record added successfully',
                'data' => $result
            ]);
        } else {
            return response()->json([
                'success' => false,
                'msg' => 'Sorry, you are unauthorized to perform the action',
            ], 401);
        }
    }
}
