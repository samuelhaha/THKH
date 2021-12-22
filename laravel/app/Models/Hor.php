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
        'g_description'
    ];

    
}
