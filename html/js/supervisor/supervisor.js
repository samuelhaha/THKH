$(document).ready(function() {
    //console.log("submitted");
    $("#submitBtn").click(function(e) {
    e.preventDefault();
    h_sp_factors = "";
    h_sp_recommend = "";
    h_sp_reportFile = "";

    currentDate = new Date();
    isoDate = currentDate.toISOString().substring(0,10);
    currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    sp_submit_datetime = isoDate + " " + currentTime;
    sp_id = "";
    status_sup = "";
    route_date_sup = "";
    updated_at = "";

        $.ajax({
            method: "POST",
            url: "/THKH/laravel/api/staff-create",
            headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
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
                //console.log(response);
                alert("Report successfully created!");
                window.location.href = 'reportspage2.html';
            }
        })

       })
    

    //possible bug of adding the same data into the object
    //update record when user click save
    $("#saveBtn").click(function (e) { 
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
        c_affectedAge = document.getElementById("c_affectedAge").value;
        c_affectedAdmitDate = document.getElementById("c_affectedAdmitDate").value;
        c_affectedAdmitTime = document.getElementById("c_affectedAdmitTime").value;
        c_affectedWing = document.getElementById("c_affectedWing").value;
        c_affectedWard = document.getElementById("c_affectedWard").value;
        c_affectedBed = document.getElementById("c_affectedBed").value;
        c_witnessNrie = document.getElementById("c_witnessNrie").value;
        c_witnessName = document.getElementById("c_witnessName").value;
        c_witnessContact = document.getElementById("c_witnessContact").value;

        d_locationOccur = document.querySelector('input[name="d_locationOccur"]:checked').value;
        d_occurSite = document.querySelector('input[name="d_occurSite"]:checked').value;
        d_occurWard = document.getElementById("d_occurWard").value;
        d_occurWardWing = document.getElementById("d_occurWardWing").value;
        d_occurBed = document.getElementById("d_occurBed").value;
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
        if ($('input[name="e_notifyDoc"]:checked')) {
            e_notifyDoc = document.getElementById("e_notifyDoc").value;
            e_timeDoc = document.getElementById("doctorTime").value;
            e_nameDoc = document.getElementById("doctorName").value;
        } 
        if ($('input[name="e_notifySup"]:checked')) {
            e_notifySup = document.getElementById("e_notifySup").value;
            e_timeSup = document.getElementById("supervisorTime").value;
            e_nameSup = document.getElementById("supervisorName").value;
        } 
        if ($('input[name="e_notifyPolice"]:checked')) {
            e_notifyPolice = document.getElementById("e_notifyPolice").value;
            e_timePolice = document.getElementById("policeTime").value;
            e_namePolice = document.getElementById("policeName").value;
        }
        if ($('input[name="e_notifyRelative"]:checked')) {
            e_notifyRelative = document.getElementById("e_notifyRelative").value;
            e_timeRelative = document.getElementById("relativeTime").value;
            e_nameRelative = document.getElementById("relativeName").value;
        } 
        f_occurType = "";
        f_fall_nearFall = "";
        f_fall_injury = "";
        f_fall_injury_type = "";
        f_fall_injury_type_other = "";
        f_fall_assessmentAdm = "";
        f_fall_assessmentOccur = "";
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
        if ($('#occurTypeFall').is(':checked')) {
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
            f_fall_assessmentOccur = document.querySelector('input[name="fallRiskAssessment"]:checked').value;
            f_fall_history = document.querySelector('input[name="historyOfFalls"]:checked').value;
            f_fall_assisted = document.querySelector('input[name="assistedFall"]:checked').value;
            f_fall_amt = document.getElementById('AMT').value;
        } 
        // if f_occurType = Medi related
        if ($('#occurTypeMed').is(':checked')) {
            f_medi_error = document.querySelector('input[name="MR_typeOfError"]:checked').value;
            if (document.getElementById('MROthers').checked) {
                f_medi_error_other = document.getElementById('MROthersSpecify').value;
            } 
            f_medi_drug = document.getElementById('drugInvolved').value;
            f_medi_reach = document.querySelector('input[name="errorReachPatient"]:checked').value;
        } 
        // if f_occurType = Others
        if ($('#occurTypeOther').is(':checked')) {
            f_other_type = document.querySelector('input[name="OI_typeOfError"]:checked').value;
            f_other_details = document.getElementById('OI_details').value;
        }

        g_situation = document.getElementById('g_situation').value;
        g_background = document.getElementById('g_background').value;
        g_action = document.getElementById('g_action').value;
        g_recommend = document.getElementById('g_recommend').value;
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

    $("#cancelBtn").click(function () {
        location.href = "login.html";
    });
});