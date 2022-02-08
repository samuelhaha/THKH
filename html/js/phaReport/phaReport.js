
$(document).ready(function () {
    let getId = new URLSearchParams(window.location.search);

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

                    if (data.c_affectedPerson) {
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

                    document.getElementById("h_sp_factors").value = data.h_sp_factors;
                    document.getElementById("h_sp_recommend").value = data.h_sp_recommend;
                    if (data.h_sp_reportFile != null) {
                        $(".uploaded_image").append(`<img src= "../images/uploaded/${data.h_sp_reportFile}">`);
                    }

                    document.getElementById("i_dt_report").value = data.i_dt_report;
                    if (data.i_dt_reportFile != null) {
                        $("#doc_uploaded_image").append(`<img src= "../images/uploaded/${data.i_dt_reportFile}">`);
                    }

                    //   $("#h_sp_factors").val(data.h_sp_factors);
                    //   $("#h_sp_recommend").val(data.h_sp_recommend);

                    //   $("#i_dt_report").val(data.i_dt_report);

                    //   if (data.f_occurType == "medication") {
                    //       $("#j_ph_comments").val(data.j_ph_comments);
                    //       $("#j_ph_result_" + data.j_ph_result).prop('checked',true);
                    //       $("#j_ph_phase_" + data.j_ph_phase).prop('checked',true);
                    //       $("#j_ph_index_" + data.j_ph_index).prop('checked',true);
                    //   }

                    // $("#k_hod_comments").val(data.k_hod_comments);

                    // $("#l_hpo_comments").val(data.l_hpo_comments);
                    // $("#l_hpo_outcome_" + data.l_hpo_outcome).prop('checked',true);
                }

            ).fail(
                function (err) {
                    console.log(err.responseText);
                }
            );
        }

    });

    $("#submitBtn").click(function (e) {
        //     e.preventDefault();
        //     var i_dt_reportFile = $('#i_dt_reportFile').prop('files')[0];
        //     var i_dt_report = document.getElementById("i_dt_report").value;
        //     var form_data = new FormData();
        //     form_data.append('i_dt_report',i_dt_report);
        //     form_data.append('i_dt_reportFile',i_dt_reportFile);

        //     if (getId.has('id')) {
        //       id = getId.get('id');
        //     $.ajax({
        //       method: "POST",
        //       url: "/THKH/laravel/api/doctor-add/" + id,
        //       headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        //       data: form_data,
        //       dataType: 'json',
        //       success: function (response) {
        //        console.log(response);
        //        $(".msg").append(response.msg);
        //        $(".uploaded_image").append(response.uploaded_image);
        //       },
        //       cache: false,
        //       contentType: false,
        //       processData: false
        //     });
        //   }
    });
});
