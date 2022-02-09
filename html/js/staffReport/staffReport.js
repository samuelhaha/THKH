$(document).ready(function () {
    let gethorNum = new URLSearchParams(window.location.search);

    if (gethorNum.has('horNum')) {
        horNum = gethorNum.get('horNum');
        $.ajax({
            method: "GET",
            url: "/THKH/laravel/api/report/" + horNum,
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem("jwt") },
        }).done(
            function (data) {
                data = data.report;
                console.log(data);
                document.getElementById("a_inccidentDate").value = data.a_inccidentDate;
                document.getElementById("a_inccidentTime").value = data.a_inccidentTime;

                document.getElementById("b_diagnosis").value = data.b_diagnosis;

                if (data.c_affectedPerson != null && data.c_affectedPerson != '') {
                    document.getElementById("c_affectedPerson_" + data.c_affectedPerson).checked = true;
                }
                document.getElementById("c_affectedName").value = data.c_affectedName;
                document.getElementById("c_affectedNric").value = data.c_affectedNrie;
                document.getElementById("c_affectedAddress").value = data.c_affectedAddress;
                if (data.c_affectedGender != null && data.c_affectedGender != '') {
                    document.getElementById("c_affectedGender_" + data.c_affectedGender).checked = true;
                }
                document.getElementById("c_affectedContact").value = data.c_affectedContact;
                document.getElementById("c_affectedAge").value = data.c_affectedAge;
                document.getElementById("c_affectedAdmitDate").value = data.c_affectedAdmitDate;
                document.getElementById("c_affectedAdmitTime").value = data.c_affectedAdmitTime;
                document.getElementById("c_affectedWing").value = data.c_affectedWing;
                document.getElementById("c_affectedWard").value = data.c_affectedWard;
                document.getElementById("c_affectedBed").value = data.c_affectedBed;
                document.getElementById("c_witnessNrie").value = data.c_witnessNrie;
                document.getElementById("c_witnessName").value = data.c_witnessName;
                document.getElementById("c_witnessContact").value = data.c_witnessContact;

                if (data.d_locationOccur != null && data.d_locationOccur != '') {
                    document.getElementById(data.d_locationOccur).checked = true;
                }
                if (data.d_occurSite != null && data.d_occurSite != '') {
                    document.getElementById("d_occurSite_" + data.d_occurSite).checked = true;
                }
                document.getElementById("d_occurWard").value = data.d_occurWard;
                document.getElementById("d_occurWardWing").value = data.d_occurWardWing;
                document.getElementById("d_occurBed").value = data.d_occurBed;
                document.getElementById("siteOthersSpecify").value = data.siteOthersSpecify;

                if (data.e_notifyDoc != '' && data.e_notifyDoc != null) {
                    document.getElementById("e_notifyDoc").checked = true;
                }
                if (data.e_notifySup != '' && data.e_notifySup != null) {
                    document.getElementById("e_notifySup").checked = true;
                }
                if (data.e_notifyPolice != '' && data.e_notifyPolice != null) {
                    document.getElementById("e_notifyPolice").checked = true;
                }
                if (data.e_notifyRelative != '' && data.e_notifyRelative != null) {
                    document.getElementById("e_notifyRelative").checked = true;
                }
                docTime = new Date(data.e_timeDoc);
                document.getElementById("doctorTime").value = docTime.toISOString().split('Z')[0];
                document.getElementById("doctorName").value = data.e_nameDoc;
                supTime = new Date(data.e_timeDoc);
                document.getElementById("supervisorTime").value = supTime.toISOString().split('Z')[0];
                document.getElementById("supervisorName").value = data.e_nameSup;
                polTime = new Date(data.e_timeDoc);
                document.getElementById("policeTime").value = polTime.toISOString().split('Z')[0];
                document.getElementById("policeName").value = data.e_namePolice;
                relTime = new Date(data.e_timeDoc);
                document.getElementById("relativeTime").value = relTime.toISOString().split('Z')[0];
                document.getElementById("relativeName").value = data.e_nameRelative;

                if (data.f_occurType == "fall") {
                    document.getElementById("occurTypeFall").checked = true;
                    if (data.f_fall_nearFall != '' && data.f_fall_nearFall != null) {
                        if (data.f_fall_nearFall == 'near_fall') {
                            document.getElementById("near_fall").checked = true;
                        } else {
                            document.getElementById("fall_non_injury").checked = true;
                        }
                    } else {
                        if (data.f_fall_injury == 'fall_injury') {
                            document.getElementById("fall_injury").checked = true;
                        } else {
                            document.getElementById("near_fall_injury").checked = true;
                        }
                    }

                    injuries = data.f_fall_injury_type.split(", ");
                    // console.log(data.f_fall_injury_type);
                    // console.log(injuries);
                    injuries.forEach(injury => {
                        // console.log(injury);
                        document.getElementById(injury).checked = true;
                    });
                    document.getElementById("fallRiskAssAdmit" + data.f_fall_assessmentAdm).checked = true;
                    document.getElementById("fallRiskAssessment" + data.f_fall_assessmentOccur).checked = true;
                    document.getElementById("historyOfFalls" + data.f_fall_history).checked = true;
                    document.getElementById("injuryOthersSpecify").value = data.f_fall_injury_type_other;
                    if (data.f_fall_assisted = "Assisted") {
                        document.getElementById("assistedFall").checked = true;
                    } else {
                        document.getElementById("unassistedFall").checked = true;
                    }
                    document.getElementById("AMT").value = data.f_fall_amt;
                } else if (data.f_occurType == "medication") {
                    document.getElementById("occurTypeMed").checked = true;
                    document.getElementById(data.f_medi_error).checked = true;
                    document.getElementById("MROthersSpecify").value = data.f_medi_error_other;
                    document.getElementById("drugInvolved").value = data.f_medi_drug;
                    if (data.f_medi_reach != '' && data.f_medi_reach != null) {
                        document.getElementById("errorReachPatient" + data.f_medi_reach).checked = true;
                    }
                } else {
                    document.getElementById("occurTypeOther").checked = true;
                    if (data.f_other_type != '' && data.f_other_type != null) {
                        document.getElementById(data.f_other_type).checked = true;
                    }
                    document.getElementById("OI_details").value = data.f_other_details;
                }
                document.getElementById("g_situation").value = data.g_situation;
                document.getElementById("g_background").value = data.g_background;
                document.getElementById("g_action").value = data.g_action;
                document.getElementById("g_recommend").value = data.g_recommend;
                document.getElementById("g_description").value = data.g_description;

            }

        ).fail(
            function (err) {
                console.log(err.responseText);
            }
        );
    }
    else {
        //console.log("submitted");
        $("#submitBtn").click(function (e) {
            e.preventDefault();
            a_inccidentDate = document.getElementById("a_inccidentDate").value;
            //console.log(a_inccidentDate);
            a_inccidentTime = document.getElementById("a_inccidentTime").value;

            b_diagnosis = document.getElementById("b_diagnosis").value;

            if (document.querySelector('input[name="c_affectedPerson"]:checked').value != null) {
                c_affectedPerson = document.querySelector('input[name="c_affectedPerson"]:checked').value;
            } else {
                c_affectedPerson = null;
            }
            c_affectedName = document.getElementById("c_affectedName").value;
            c_affectedNrie = document.getElementById("c_affectedNric").value;
            c_affectedAddress = document.getElementById("c_affectedAddress").value;
            if (document.querySelector('input[name="c_affectedGender"]:checked').value != null) {
                c_affectedGender = document.querySelector('input[name="c_affectedGender"]:checked').value;
            } else {
                c_affectedGender = null;
            }
            c_affectedContact = document.getElementById("c_affectedContact").value;
            c_affectedAge = document.getElementById("c_affectedAge").value;
            c_affectedAdmitDate = document.getElementById("c_affectedAdmitDate").value;
            c_affectedAdmitTime = document.getElementById("c_affectedAdmitTime").value;
            c_affectedAdmitDateTime = c_affectedAdmitDate + " " + c_affectedAdmitTime;
            c_affectedWing = document.getElementById("c_affectedWing").value;
            c_affectedWard = document.getElementById("c_affectedWard").value;
            c_affectedBed = document.getElementById("c_affectedBed").value;
            c_witnessNrie = document.getElementById("c_witnessNrie").value;
            c_witnessName = document.getElementById("c_witnessName").value;
            c_witnessContact = document.getElementById("c_witnessContact").value;

            if (document.querySelector('input[name="d_locationOccur"]:checked').value != null) {
                d_locationOccur = document.querySelector('input[name="d_locationOccur"]:checked').value;
            } else {
                d_locationOccur = null;
            }
            if (document.querySelector('input[name="d_occurSite"]:checked').value != null) {
                d_occurSite = document.querySelector('input[name="d_occurSite"]:checked').value;
            } else {
                d_occurSite = null;
            }
            
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
                    if (document.querySelector('input[name="fallRelated"]:checked').value != null) {
                        f_fall_injury = document.querySelector('input[name="fallRelated"]:checked').value;
                    }
                }
                //f_fall_injury_type might not work, not sure if can get all the values from the checkbox
                injuryOldArray = Array.from(document.querySelectorAll('input[name="typeOfInjury"]:checked'));
                injuryString = '';
                injuryArray.forEach((val, key, injuryArray) => {
                    if (Object.is(injuryArray.length - 1, key)) {
                        injuryString += val.value;
                    } else {
                        injuryString += val.value + ', ';
                    }
                });
                f_fall_injury_type = injuryString;
                if (document.getElementById('injuryOthers').checked) {
                    f_fall_injury_type_other = document.getElementById('injuryOthersSpecify').value;
                }
                f_fall_assessmentAdm = document.querySelector('input[name="fallRiskAssAdmit"]:checked').value;
                f_fall_assessmentOccur = document.querySelector('input[name="fallRiskAssessment"]:checked').value;
                f_fall_history = document.querySelector('input[name="historyOfFalls"]:checked').value;
                f_fall_assisted = document.querySelector('input[name="assistedFall"]:checked').value;
                f_fall_amt = document.getElementById('AMT').value;
            }
            // if f_occurType = Medi related
            if ($('#occurTypeMed').is(':checked')) {
                f_medi_error = document.querySelector('input[name="MR_typeOfError"]:checked').value;
                if (document.getElementById('mr_others').checked) {
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
            currentDate = new Date();
            isoDate = currentDate.toISOString().substring(0, 10);
            currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
            rs_submit_datetime = isoDate + " " + currentTime;
            // rs_id = sessionStorage.getItem('staff_id');
            status_sup = "pending";
            sp_id = $("#selectedSupervisor").val();
            status_doc = "pending";
            dt_id = $("#selectedDoctor").val();
            if ($('#occurTypeMed').is(':checked')) {
                status_pha = "pending";
                ph_id = $("#selectedPharmacy").val();
            } else {
                status_pha = "NA";
                ph_id = '';
            }

            // route_date_rps = "";
            completion_status = "Open";
            created_at = isoDate + " " + currentTime;


            $.ajax({
                method: "POST",
                url: "/THKH/laravel/api/staff-create",
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem("jwt") },
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
                    c_affectedAdmitDateTime: c_affectedAdmitDateTime,
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
                    rs_submit_datetime: rs_submit_datetime,
                    
                    status_sup: status_sup,
                    sp_id: sp_id,
                    status_doc: status_doc,
                    dt_id: dt_id,
                    status_pha: status_pha,
                    ph_id: ph_id,
                    completion_status: completion_status,
                    created_at: created_at
                },
                success: function (response) {
                    //console.log(response);
                    alert("Report successfully created!");
                    window.location.href = 'hor.html';
                }
            })

        })
    }

    //update record when user click save
    $("#saveBtn").click(function (e) {
        //console.log("submitted");
        e.preventDefault();
        console.log("save btn pressed");
        a_inccidentDate = document.getElementById("a_inccidentDate").value;
        //console.log(a_inccidentDate);
        a_inccidentTime = document.getElementById("a_inccidentTime").value;

        b_diagnosis = document.getElementById("b_diagnosis").value;
        if (document.querySelector('input[name="c_affectedPerson"]:checked')) {
            c_affectedPerson = document.querySelector('input[name="c_affectedPerson"]:checked').value;
        }
        else
        {
            c_affectedPerson = null;
        }
        c_affectedName = document.getElementById("c_affectedName").value;
        c_affectedNrie = document.getElementById("c_affectedNric").value;
        c_affectedAddress = document.getElementById("c_affectedAddress").value;
        if (document.querySelector('input[name="c_affectedGender"]:checked')) {
            c_affectedGender = document.querySelector('input[name="c_affectedGender"]:checked').value;
        } else {
            c_affectedGender = null;
        }
        c_affectedContact = document.getElementById("c_affectedContact").value;
        c_affectedAge = document.getElementById("c_affectedAge").value;
        c_affectedAdmitDate = document.getElementById("c_affectedAdmitDate").value;
        c_affectedAdmitTime = document.getElementById("c_affectedAdmitTime").value;
        c_affectedAdmitDateTime = c_affectedAdmitDate + " " + c_affectedAdmitTime;
        c_affectedWing = document.getElementById("c_affectedWing").value;
        c_affectedWard = document.getElementById("c_affectedWard").value;
        c_affectedBed = document.getElementById("c_affectedBed").value;
        c_witnessNrie = document.getElementById("c_witnessNrie").value;
        c_witnessName = document.getElementById("c_witnessName").value;
        c_witnessContact = document.getElementById("c_witnessContact").value;

        if (document.querySelector('input[name="d_locationOccur"]:checked')) {
            d_locationOccur = document.querySelector('input[name="d_locationOccur"]:checked').value;
        } else {
            d_locationOccur = null;
        }
        if (document.querySelector('input[name="d_occurSite"]:checked')) {
            d_occurSite = document.querySelector('input[name="d_occurSite"]:checked').value;
        } else {
            d_occurSite = null;
        }
        
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
            injuryOldArray = Array.from(document.querySelectorAll('input[name="typeOfInjury"]:checked'));
            injuryString = '';
            injuryArray.forEach((val, key, injuryArray) => {
                if (Object.is(injuryArray.length - 1, key)) {
                    injuryString += val.value;
                } else {
                    injuryString += val.value + ', ';
                }
            });
            f_fall_injury_type = injuryString;
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
        
        save_date_rps = null;
        updated_at = null;
        rs_submit_datetime = null;
        status_sup = null;
        sp_id = null;
        status_doc = null;
        dt_id = null;
        
        status_pha = null;
        ph_id = null;
        
        currentDate = new Date();
        isoDate = currentDate.toISOString().substring(0, 10);
        currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
        // route_date_rps = "";
        completion_status = null;
        created_at = isoDate + " " + currentTime;
        if (gethorNum.has('horNum')) {
            horNum = gethorNum.get('horNum');

            $.ajax({
                method: "POST",
                url: "/THKH/laravel/api/staff-save/" + horNum,
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem("jwt") },
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
                    save_date_rps: save_date_rps,
                    updated_at: updated_at,
                },
                success: function (response) {
                    console.log("saved data");
                    console.log(response);
                }

            });
        }else{
            $.ajax({
                method: "POST",
                url: "/THKH/laravel/api/staff-create",
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem("jwt") },
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
                    c_affectedAdmitDateTime: c_affectedAdmitDateTime,
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
                    horNum: "DHOR",
                    rs_submit_datetime: rs_submit_datetime,
                    status_sup: status_sup,
                    sp_id: sp_id,
                    status_doc: status_doc,
                    dt_id: dt_id,
                    status_pha: status_pha,
                    ph_id: ph_id,
                    completion_status: completion_status,
                    created_at: created_at
                },
                success: function (response) {
                    alert("Report saved");
                    console.log("created new record");
                    console.log(response);
                }

            });
        }

        });

    $("#cancelBtn").click(function () {
        location.href = "login.html";
    });
});

function showForm() {
    $("#popupForm").css({ "display": "block" });
    $("#overlay").css({ "display": "block" });
    $('#innerFormContainer').empty();
    $.ajax({
        method: "GET",
        url: "/THKH/laravel/api/getnames",
        headers: { Authorization: 'Bearer ' + sessionStorage.getItem("jwt") },
    })
        .done(
            function (data) {
                $('#innerFormContainer').append(`
                <h3>Assign to</h3>
                <label for="selectedSupervisor">
                    <b>Supervisor</b>
                </label>
                <select name="selectedSupervisor" class="dropdown" id="selectedSupervisor" required>
                </select>
                <label for="selectedDoctor">
                    <b>Doctor</b>
                </label>
                <select name="selectedDoctor" class="dropdown" id="selectedDoctor" required>
                </select>
                `);
                if ($('#occurTypeMed').is(':checked')) {
                    // $('.formContainer').empty();
                    $('#innerFormContainer').append(`
                <label for="selectedPharmacy">
                    <b>Pharmacy</b>
                </label>
                <select name="selectedPharmacy" class="dropdown" id="selectedPharmacy" required>
                </select>
                `);

                    $.each(data.pha, function (key, person) {
                        $("#selectedPharmacy").append(` 
                    <option value="${person.staff_id}">${person.name}</option>
                    `);
                    })
                }
                $.each(data.sup, function (key, person) {
                    $("#selectedSupervisor").append(` 
                <option value="${person.staff_id}">${person.name}</option>
                `);
                })
                $.each(data.doc, function (key, person) {
                    $("#selectedDoctor").append(` 
                <option value="${person.staff_id}">${person.name}</option>
                `);
                })
            }
        )
        .fail(
            function (err) {
                console.log(err.responseText);
            }
        )
}

function closeForm() {
    $("#popupForm").css({ "display": "none" });
    $("#overlay").css({ "display": "none" });
}