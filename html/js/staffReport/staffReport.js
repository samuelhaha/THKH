$(document).ready(function() {
    var a_inccidentDate;
    var a_inccidentTime;

    var b_diagnosis;

    var c_affectedPerson;
    var c_affectedName;
    var c_affectedNrie;
    var c_affectedAddress;
    var c_affectedGender;
    var c_affectedContact;
    var c_affectedAge;
    var c_affectedAdmitDate;
    var c_affectedAdmitTime;
    var c_affectedWing;
    var c_affectedWard;
    var c_affectedBed;
    var c_witnessNrie;
    var c_witnessName;
    var c_witnessContact;

    var d_locationOccur;
    var d_occurSite;
    var d_occurWard;
    var d_occurWardWing;
    var d_occurBed;
    var d_site_other;

    var e_notifyDoc;
    var e_timeDoc;
    var e_nameDoc;
    var e_notifySup;
    var e_timeSup;
    var e_nameSup;
    var e_notifyPolice;
    var e_timePolice;
    var e_namePolice;
    var e_notifyRelative;
    var e_timeRelative;
    var e_nameRelative;

    var f_occurType;
    var f_fall_nearFall;
    var f_fall_injury;
    var f_fall_injury_type;
    var f_fall_injury_type_other;
    var f_fall_assessmentAdm;
    var f_fall_assessmentOccur; //seems the same as assessmentAdm
    var f_fall_history;
    var f_fall_assisted;
    var f_fall_amt;
    var f_medi_error;
    var f_medi_error_other;
    var f_medi_drug;
    var f_medi_reach;
    var f_other_type;
    var f_other_details;
   
    var g_situation;
    var g_background;
    var g_action;
    var g_recommend;
    var g_description;

    $("#submitBtn").click(function(e) {
        //console.log("submitted");
        e.preventDefault();
        a_inccidentDate = document.getElementById("a_inccidentDate").value;
        //console.log(a_inccidentDate);
        a_inccidentTime = document.getElementById("a_inccidentTime").value;

        b_diagnosis = document.getElementById("b_diagnosis").value;

        c_affectedPerson = document.querySelector('input[name="c_affectedPerson"]:checked').value;
        c_affectedName = document.getElementById("c_affectedName").value;
        c_affectedNrie = document.getElementById("c_affectedNric").value;
        c_affectedAddress = document.getElementById("c_affectedAddress").value;
        c_affectedGender = document.querySelector('input[name="c_affectedGender"]:checked').value;
        c_affectedContact = document.getElementById("c_affectedContact").value;
        c_affectedAge = "";
        c_affectedAdmitDate = "";
        c_affectedAdmitTime = "";
        c_affectedWing = "";
        c_affectedWard = document.getElementById("c_affectedWard").value;
        c_affectedBed = document.getElementById("c_affectedBed").value;
        c_witnessNrie = "";
        c_witnessName = "";
        c_witnessContact = "";

        d_locationOccur = document.querySelector('input[name="d_locationOccur"]:checked').value;
        d_occurSite = document.querySelector('input[name="d_occurSite"]:checked').value;
        d_occurWard = "";
        d_occurWardWing = "";
        d_occurBed = "";
        d_site_other = document.getElementById("siteOthersSpecify").value;

        e_notifyDoc = "";
        e_timeDoc = "";
        e_nameDoc = "";
        e_notifySup = "";
        e_timeSup = "";
        e_nameSup = "";
        e_notifyPolice = "";
        e_timePolice = "";
        e_namePolice = "";
        e_notifyRelative = "";
        e_timeRelative = "";
        e_nameRelative = "";
        if (document.getElementById("doctorTime").value != null) {
            e_notifyDoc = "e_notifyDoc";
            e_timeDoc = document.getElementById("doctorTime").value;
            e_nameDoc = "";
        } 
        if (document.getElementById("supervisorTime").value != null) {
            e_notifySup = "e_notifySup";
            e_timeSup = document.getElementById("supervisorTime").value;
            e_nameSup = "";
        } 
        if (document.getElementById("policeTime").value != null) {
            e_notifyPolice = "e_notifyPolice";
            e_timePolice = document.getElementById("policeTime").value;
            e_namePolice = "";
        }
        if (document.getElementById("relativeTime").value != null) {
            e_notifyRelative = "e_notifyRelative";
            e_timeRelative = document.getElementById("relativeTime").value;
            e_nameRelative = "";
        } 
        f_occurType = "";
        f_fall_nearFall = "";
        f_fall_injury = "";
        f_fall_injury_type = "";
        f_fall_injury_type_other = "";
        f_fall_assessmentAdm = "";
        f_fall_assessmentOccur = null; //seems the same as assessmentAdm
        f_fall_history = "";
        f_fall_assisted = "";
        f_fall_amt = "";
        f_medi_error = "";
        f_medi_error_other = "";
        f_medi_drug = "";
        f_medi_reach = "";
        f_other_type = "";
        f_other_details = "";
        // if f_occurType = Fall related
        //if (condition) {
            if (document.getElementById('fallNonInjury').checked || document.getElementById('nearFall').checked) {
                f_fall_nearFall = document.querySelector('input[name="fallRelated"]:checked').value;
            } else {
                f_fall_injury = document.querySelector('input[name="fallRelated"]:checked').value;
            }
            //f_fall_injury_type might not work, not sure if can get all the values from the checkbox
            f_fall_injury_type = document.querySelectorAll('input[name="typeOfInjury"]:checked').value;
            if (document.getElementById('injuryOthers').checked) {
                f_fall_injury_type_other = document.getElementById('injuryOthersSpecify').value;
            }
            f_fall_assessmentAdm = document.querySelector('input[name="fallRiskAssessment"]:checked').value;
            f_fall_history = document.querySelector('input[name="historyOfFalls"]:checked').value;
            f_fall_assisted = document.querySelector('input[name="assistedFall"]:checked').value;
            f_fall_amt = document.getElementById('AMT').value;
        //} 
        // if f_occurType = Medi related
        //if (condition) {
            f_medi_error = document.querySelector('input[name="MR_typeOfError"]:checked').value;
            if (document.getElementById('MROthers').checked) {
                f_medi_error_other = document.getElementById('MROthersSpecify').value;
            } 
            f_medi_drug = document.getElementById('drugInvolved').value;
            f_medi_reach = document.querySelector('input[name="errorReachPatient"]:checked').value;
        //} 
        // if f_occurType = Others
        //if (condition) {
            f_other_type = document.querySelector('input[name="OI_typeOfError"]:checked').value;
            f_other_details = document.getElementById('OI_details').value;
        //}

        g_situation = "";
        g_background = "";
        g_action = "";
        g_recommend = "";
        g_description = document.getElementById('g_description').value;

        $.ajax({
            method: "POST",
            url: "/THKH/laravel/api/staff-create",
            headers: {Authorization: 'Bearer ' + localStorage.getItem("jwt")},
            data: {
                a_inccidentDate: a_inccidentDate,
                a_inccidentTime: a_inccidentTime,
                b_diagnosis: b_diagnosis,
                c_affectedPerson: c_affectedPerson,
                c_affectedName: c_affectedName,
                c_affectedNrie: c_affectedNrie,
                c_affectedAddress: c_affectedAddress,
                c_affectedGender: c_affectedGender,
                c_affectedContact: c_affectedContact,
                c_affectedAge: c_affectedAge,
                c_affectedAdmitDate: c_affectedAdmitDate,
                c_affectedAdmitTime: c_affectedAdmitTime,
                c_affectedWing: c_affectedWing,
                c_affectedWard: c_affectedWard,
                c_affectedBed: c_affectedBed,
                c_witnessNrie: c_witnessNrie,
                c_witnessName: c_witnessName,
                c_witnessContact: c_witnessContact,
                d_locationOccur: d_locationOccur,
                d_occurSite: d_occurSite,
                d_occurWard: d_occurWard,
                d_occurWardWing: d_occurWardWing,
                d_occurBed: d_occurBed,
                d_site_other: d_site_other,
                e_notifySup: e_notifySup,
                e_notifyDoc: e_notifyDoc,
                e_notifyPolice: e_notifyPolice,
                e_notifyRelative: e_notifyRelative,
                e_timeDoc: e_timeDoc,
                e_timeSup: e_timeSup,
                e_timePolice: e_timePolice,
                e_timeRelative: e_timeRelative,
                e_nameSup: e_nameSup,
                e_nameDoc: e_nameDoc,
                e_namePolice: e_namePolice,
                e_nameRelative: e_nameRelative,
                f_occurType: f_occurType,
                f_fall_nearFall: f_fall_nearFall,
                f_fall_injury: f_fall_injury,
                f_fall_injury_type: f_fall_injury_type,
                f_fall_injury_type_other: f_fall_injury_type_other,
                f_fall_assessmentAdm: f_fall_assessmentAdm,
                f_fall_assessmentOccur: f_fall_assessmentOccur,
                f_fall_history: f_fall_history,
                f_fall_assisted: f_fall_assisted,
                f_fall_amt: f_fall_amt,
                f_medi_error: f_medi_error,
                f_medi_error_other: f_medi_error_other,
                f_medi_drug: f_medi_drug,
                f_medi_reach: f_medi_reach,
                f_other_type: f_other_type,
                f_other_details: f_other_details,
                g_situation: g_situation,
                g_background: g_background,
                g_action: g_action,
                g_recommend: g_recommend,
                g_description: g_description,
            },
            success: function (response) {
                console.log(response);
                //console.log("response");
            }

       })
    })

    //possible bug of adding the same data into the object
    //update record when user click save
    $("#saveBtn").click(function (e) { 
        e.preventDefault();
        a_inccidentDate = document.getElementById("a_inccidentDate").value;
        //console.log(a_inccidentDate);
        a_inccidentTime = document.getElementById("a_inccidentTime").value;

        b_diagnosis = document.getElementById("b_diagnosis").value;

        c_affectedPerson = document.querySelector('input[name="c_affectedPerson"]:checked').value;
        c_affectedName = document.getElementById("c_affectedName").value;
        c_affectedNrie = document.getElementById("c_affectedNric").value;
        c_affectedAddress = document.getElementById("c_affectedAddress").value;
        c_affectedGender = document.querySelector('input[name="c_affectedGender"]:checked').value;
        c_affectedContact = document.getElementById("c_affectedContact").value;
        c_affectedAge = "";
        c_affectedAdmitDate = "";
        c_affectedAdmitTime = "";
        c_affectedWing = "";
        c_affectedWard = document.getElementById("c_affectedWard").value;
        c_affectedBed = document.getElementById("c_affectedBed").value;
        c_witnessNrie = "";
        c_witnessName = "";
        c_witnessContact = "";

        d_locationOccur = document.querySelector('input[name="d_locationOccur"]:checked').value;
        d_occurSite = document.querySelector('input[name="d_occurSite"]:checked').value;
        d_occurWard = "";
        d_occurWardWing = "";
        d_occurBed = "";
        d_site_other = document.getElementById("siteOthersSpecify").value;

        e_notifyDoc = "";
        e_timeDoc = "";
        e_nameDoc = "";
        e_notifySup = "";
        e_timeSup = "";
        e_nameSup = "";
        e_notifyPolice = "";
        e_timePolice = "";
        e_namePolice = "";
        e_notifyRelative = "";
        e_timeRelative = "";
        e_nameRelative = "";
        if (document.getElementById("doctorTime").value != null) {
            e_notifyDoc = "e_notifyDoc";
            e_timeDoc = document.getElementById("doctorTime").value;
            e_nameDoc = "";
        } 
        if (document.getElementById("supervisorTime").value != null) {
            e_notifySup = "e_notifySup";
            e_timeSup = document.getElementById("supervisorTime").value;
            e_nameSup = "";
        } 
        if (document.getElementById("policeTime").value != null) {
            e_notifyPolice = "e_notifyPolice";
            e_timePolice = document.getElementById("policeTime").value;
            e_namePolice = "";
        }
        if (document.getElementById("relativeTime").value != null) {
            e_notifyRelative = "e_notifyRelative";
            e_timeRelative = document.getElementById("relativeTime").value;
            e_nameRelative = "";
        } 
        f_occurType = "";
        f_fall_nearFall = "";
        f_fall_injury = "";
        f_fall_injury_type = "";
        f_fall_injury_type_other = "";
        f_fall_assessmentAdm = "";
        f_fall_assessmentOccur = null; //seems the same as assessmentAdm
        f_fall_history = "";
        f_fall_assisted = "";
        f_fall_amt = "";
        f_medi_error = "";
        f_medi_error_other = "";
        f_medi_drug = "";
        f_medi_reach = "";
        f_other_type = "";
        f_other_details = "";
        // if f_occurType = Fall related
        //if (condition) {
            if (document.getElementById('fallNonInjury').checked || document.getElementById('nearFall').checked) {
                f_fall_nearFall = document.querySelector('input[name="fallRelated"]:checked').value;
            } else {
                f_fall_injury = document.querySelector('input[name="fallRelated"]:checked').value;
            }
            //f_fall_injury_type might not work, not sure if can get all the values from the checkbox
            f_fall_injury_type = document.querySelectorAll('input[name="typeOfInjury"]:checked').value;
            if (document.getElementById('injuryOthers').checked) {
                f_fall_injury_type_other = document.getElementById('injuryOthersSpecify').value;
            }
            f_fall_assessmentAdm = document.querySelector('input[name="fallRiskAssessment"]:checked').value;
            f_fall_history = document.querySelector('input[name="historyOfFalls"]:checked').value;
            f_fall_assisted = document.querySelector('input[name="assistedFall"]:checked').value;
            f_fall_amt = document.getElementById('AMT').value;
        //} 
        // if f_occurType = Medi related
        //if (condition) {
            f_medi_error = document.querySelector('input[name="MR_typeOfError"]:checked').value;
            if (document.getElementById('MROthers').checked) {
                f_medi_error_other = document.getElementById('MROthersSpecify').value;
            } 
            f_medi_drug = document.getElementById('drugInvolved').value;
            f_medi_reach = document.querySelector('input[name="errorReachPatient"]:checked').value;
        //} 
        // if f_occurType = Others
        //if (condition) {
            f_other_type = document.querySelector('input[name="OI_typeOfError"]:checked').value;
            f_other_details = document.getElementById('OI_details').value;
        //}

        g_situation = "";
        g_background = "";
        g_action = "";
        g_recommend = "";
        g_description = document.getElementById('g_description').value;

        $.ajax({
            method: "POST",
            url: "/THKH/laravel/api/staff-save",
            headers: {Authorization: 'Bearer ' + localStorage.getItem("jwt")},
            data: {
                a_inccidentDate: a_inccidentDate,
                a_inccidentTime: a_inccidentTime,
                b_diagnosis: b_diagnosis,
                c_affectedPerson: c_affectedPerson,
                c_affectedName: c_affectedName,
                c_affectedNrie: c_affectedNrie,
                c_affectedAddress: c_affectedAddress,
                c_affectedGender: c_affectedGender,
                c_affectedContact: c_affectedContact,
                c_affectedAge: c_affectedAge,
                c_affectedAdmitDate: c_affectedAdmitDate,
                c_affectedAdmitTime: c_affectedAdmitTime,
                c_affectedWing: c_affectedWing,
                c_affectedWard: c_affectedWard,
                c_affectedBed: c_affectedBed,
                c_witnessNrie: c_witnessNrie,
                c_witnessName: c_witnessName,
                c_witnessContact: c_witnessContact,
                d_locationOccur: d_locationOccur,
                d_occurSite: d_occurSite,
                d_occurWard: d_occurWard,
                d_occurWardWing: d_occurWardWing,
                d_occurBed: d_occurBed,
                d_site_other: d_site_other,
                e_notifySup: e_notifySup,
                e_notifyDoc: e_notifyDoc,
                e_notifyPolice: e_notifyPolice,
                e_notifyRelative: e_notifyRelative,
                e_timeDoc: e_timeDoc,
                e_timeSup: e_timeSup,
                e_timePolice: e_timePolice,
                e_timeRelative: e_timeRelative,
                e_nameSup: e_nameSup,
                e_nameDoc: e_nameDoc,
                e_namePolice: e_namePolice,
                e_nameRelative: e_nameRelative,
                f_occurType: f_occurType,
                f_fall_nearFall: f_fall_nearFall,
                f_fall_injury: f_fall_injury,
                f_fall_injury_type: f_fall_injury_type,
                f_fall_injury_type_other: f_fall_injury_type_other,
                f_fall_assessmentAdm: f_fall_assessmentAdm,
                f_fall_assessmentOccur: f_fall_assessmentOccur,
                f_fall_history: f_fall_history,
                f_fall_assisted: f_fall_assisted,
                f_fall_amt: f_fall_amt,
                f_medi_error: f_medi_error,
                f_medi_error_other: f_medi_error_other,
                f_medi_drug: f_medi_drug,
                f_medi_reach: f_medi_reach,
                f_other_type: f_other_type,
                f_other_details: f_other_details,
                g_situation: g_situation,
                g_background: g_background,
                g_action: g_action,
                g_recommend: g_recommend,
                g_description: g_description,
            },
            success: function (response) {
                console.log(response);
            }

    });

    
});