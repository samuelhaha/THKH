var testFunction = function () {
    // var a_inccidentDate = document.getElementById("a_inccidentDate").value;
    // var a_inccidentTime = document.getElementById("a_inccidentTime").value;

    // var b_diagnosis = document.getElementById("b_diagnosis").value;

    // var c_affectedPerson = document.querySelector('input[name="c_affectedPerson"]:checked').value;
    // var c_affectedName = document.getElementById("c_affectedName").value;
    // var c_affectedNrie = document.getElementById("c_affectedNric").value;
    // var c_affectedAddress = document.getElementById("c_affectedAddress").value;
    // var c_affectedGender = document.querySelector('input[name="c_affectedGender"]:checked').value;
    // var c_affectedContact = document.getElementById("c_affectedContact").value;
    // var c_affectedAge = "";
    // var c_affectedAdmitDate = "";
    // var c_affectedAdmitTime = "";
    // var c_affectedWing = "";
    // var c_affectedWard = document.getElementById("c_affectedWard").value;
    // var c_affectedBed = document.getElementById("c_affectedBed").value;
    // var c_witnessNrie = "";
    // var c_witnessContact = "";

    // var d_locationOccur = document.querySelector('input[name="d_locationOccur"]:checked').value;
    // var d_occurSite = document.querySelector('input[name="d_occurSite"]:checked').value;
    // var d_occurWard = "";
    // var d_occurWardWing = "";
    // var d_occurBed = "";
    // var d_site_other = document.getElementById("siteOthersSpecify").value;

    // var e_notifyDoc = "";
    // var e_timeDoc = "";
    // var e_nameDoc = "";
    // var e_notifySup = "";
    // var e_timeSup = "";
    // var e_nameSup = "";
    // var e_notifyPolice = "";
    // var e_timePolice = "";
    // var e_namePolice = "";
    // var e_notifyRelative = "";
    // var e_timeRelative = "";
    // var e_nameRelative = "";
    // if (document.getElementById("doctorTime").value != null) {
    //     e_notifyDoc = "e_notifyDoc";
    //     e_timeDoc = document.getElementById("doctorTime").value;
    //     e_nameDoc = "";
    // } 
    // if (document.getElementById("supervisorTime").value != null) {
    //     e_notifySup = "e_notifySup";
    //     e_timeSup = document.getElementById("supervisorTime").value;
    //     e_nameSup = "";
    // } 
    // if (document.getElementById("policeTime").value != null) {
    //     e_notifyPolice = "e_notifyPolice";
    //     e_timePolice = document.getElementById("policeTime").value;
    //     e_namePolice = "";
    // }
    // if (document.getElementById("relativeTime").value != null) {
    //     e_notifyRelative = "e_notifyRelative";
    //     e_timeRelative = document.getElementById("relativeTime").value;
    //     e_nameRelative = "";
    // } 
    var f_occurType = "";
    var f_fall_nearFall = "";
    var f_fall_injury = "";
    var f_fall_injury_type = "";
    var f_fall_injury_type_other = "";
    var f_fall_assessmentAdm = "";
    var f_fall_assessmentOccur = null; //seems the same as assessmentAdm
    var f_fall_history = "";
    var f_fall_assisted = "";
    var f_fall_amt = "";
    var f_medi_error = "";
    var f_medi_error_other = "";
    var f_medi_drug = "";
    var f_medi_reach = "";
    var f_other_type = "";
    var f_other_details = "";
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

    var g_situation = "";
    var g_background = "";
    var g_action = "";
    var g_recommend = "";
    var g_description = document.getElementById('g_description').value;
    // console.log('AB');
    // console.log(a_inccidentDate,a_inccidentTime,b_diagnosis);
    // console.log('C');
    // console.log(c_affectedPerson,c_affectedName,c_affectedNrie,c_affectedAddress,c_affectedGender,c_affectedContact,c_affectedWard,c_affectedBed);
    // console.log('DE');
    // console.log(d_locationOccur,d_occurSite,d_site_other,e_notifyDoc,e_timeDoc,e_notifySup,e_timeSup,e_notifyPolice,e_timePolice,e_notifyRelative,e_timeRelative);
    console.log('F fall');
    console.log(f_fall_nearFall,f_fall_injury,f_fall_injury_type,f_fall_injury_type_other,f_fall_assessmentAdm,f_fall_history,f_fall_assisted,f_fall_amt);
    console.log('F Medi');
    console.log(f_medi_error,f_medi_error_other,f_medi_drug,f_medi_reach);
    console.log('F Other');
    console.log(f_other_type,f_other_details);
    // console.log('G');
    // console.log(g_description);
}



//possible bug of adding the same data into the object
var saveToSession = function () {
    var form = document.querySelector('form');
    console.log(form);
    var formElem = new FormData(form);
    console.log(formElem);

    var formToJSON = JSON.stringify(Object.fromEntries(formElem));
    if (sessionStorage.getItem("FormData" === null)) {
        sessionStorage.setItem("FormData", formToJSON);
    } else {
        var currentFormData = JSON.parse(sessionStorage.getItem("FormData"));
        var newFormToJSON = JSON.stringify(Object.assign(currentFormData, formElem));
        sessionStorage.setItem("FormData", newFormToJSON);
    }
    
};

$(document).ready(function() {
    $.ajax({
        url: "",
        method: "post"
    })
        .done(
            function (data) {
               
            }
        )
        .fail(
            function (err) {
               
            }
        )

    
});