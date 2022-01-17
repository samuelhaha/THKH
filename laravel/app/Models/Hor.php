<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hor extends Model
{
    // 
    protected $table = 'hors';
    protected $primaryKey = 'id';
    public $incrementing = true;

    protected $fillable = [
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
        'g_description',
        'rs_submit_datetime',
        'rs_id',
        'void',
        'void_reason',
        'h_sp_factors',
        'h_sp_recommend',
        'h_sp_reportFile',
        'sp_submit_datetime',
        'sp_id',
        'i_dt_report',
        'i_dt_reportFile',
        'dt_submit_datetime',
        'dt_id',
        'j_ph_comments',
        'j_ph_result',
        'j_ph_phase',
        'j_ph_index',
        'j_ph_index_other',
        'ph_submit_datetime',
        'ph_id',
        'k_hod_comments',
        'hod_submit_datetime',
        'hod_id',
        'l_hpo_comments',
        'l_hpo_outcome',
        'hor_formstatus',
        'hor_formstatus_reason',
        'hpo_submit_datetime',
        'hpo_id',
        'm_dms_comments',
        'm_dms_verdict',
        'dms_submit_datetime',
        'dms_id',
        'status_rps',
        'status_sup',
        'status_doc',
        'status_pha',
        'status_hod',
        'status_hpo',
        'status_dms',
        'save_date_rps',
        'save_date_sup',
        'save_date_pha',
        'save_date_doc',
        'save_date_hod',
        'save_date_hpo',
        'save_date_dms',
        'route_date_rps',
        'route_date_sup',
        'route_date_pha',
        'route_date_doc',
        'route_date_hod',
        'route_date_hpo',
        'route_date_dms',
        'completion_status',
        'updated_at',
        'created_at',
        
    ];

    
}
