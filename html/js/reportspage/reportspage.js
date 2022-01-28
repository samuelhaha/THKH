$(document).ready(function() {
    $status = $("#status").val();
    if($status == 'submitted'){
        $('#route').prop('disabled', false);
    }
    $.ajax({
        method: "get",
        url: "/THKH/laravel/api/getReports",
        dataType:"json",
        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        success: function(response){
            $.each(response.reports, function(key,report){
                $("tbody").append(`
                   <tr style="height:30px">\
                       <td>`+report.c_affectedName+`</td>\
                       <td>`+report.a_inccidentDate+`</td>\
                       <td>`+report.a_inccidentTime+`</td>\
                       <td id="status">`+report.status_rps+`</td>\
                       <td><button type="button" id="edit">Edit Report</button></td>\
                       <td><select id="route" disabled><option value="supervisor">sup1</option></select><td>\
                   </tr>`);
                //    <td><button type="button" id="delete">Delete Report</button><td>\
            });
        }
    });
    $("#edit").on('click',function(){
        
    });
    $("#delete").on('click',function(){})

    
    

});