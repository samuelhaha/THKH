$(document).ready(function() {
    
    $.ajax({
        method: "get",
        url: "/THKH/laravel/api/getReports",
        dataType:"json",
        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        success: function(response){
            $.each(response.reports, function(key,report){
                $("#table").find("tbody").append(`
                   <tr style="height:30px">\
                       <td class="reportId">`+report.id+`</td>\
                       <td>`+report.c_affectedName+`</td>\
                       <td>`+report.created_at+`</td>\
                       <td>`+report.completion_status+`</td>\
                       <td id="status">`+report.status_rps+`</td>\
                       <td><select id="route" disabled><option value="supervisor">sup1</option></select></td>\
                       <td><button type="button" id="edit">Edit Report</button></td>\
                       <td><button class="return">Return report to staff</button></td>\
                   </tr>`);
                  
                //    <td><button type="button" id="delete">Delete Report</button><td>\
            });
            $(".return").click(function(){
                var $row = $(this).closest("tr");
                var $id = $row.find(".reportId").text();
                let reason = prompt("Please enter reason");
                console.log("id is: "+ $id);
                if(reason != null){
                    $.ajax({
                        method:"post",
                        url:"/THKH/laravel/api/returnReport/" + $id,
                        dataType: "json",
                        data: {reason:reason},
                        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
                        success: function(response){
                            $("#msg").append(response.reason);
                            console.log(response.reason);
                            $("#msg").css({"color":"green"});
                        }
                    });
                }
                
            });
            $status = document.getElementById("status").value;
            if($status == 'submitted'){
                $('#route').prop('disabled', false);
            }
            // else{
            //     $('#route').prop('disabled', true);
            // }
            
        }
    });
   

    $("#edit").on('click',function(){
        
    });
    $("#delete").on('click',function(){})

    
    

});

// function returnReport(){
//     //var role = sessionStorage.getItem("role");
//     //if user is not staff then #return show
//     //var currentRow = x.rowIndex;
//     //console.log(currentRow);
//     //var id = currentRow.find("td:eq(0)").html();
//     var id = $(this).closest("tr").find("td:eq(0)").html();
//     let reason = prompt("Please enter reason");
//     console.log("id is: "+ id);
    
//     if(reason != null){
//         $.ajax({
//             method:"post",
//             url:"/THKH/laravel/api/returnReport/" + id,
//             dataType: "json",
//             data: {route_reason:reason},
//             headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
//             success: function(response){
//                 $("#msg").append(response.reason);
//                 console.log(response.route_reason);
//                 $("#msg").css({"color":"green"});
//             }
//         })
//     }
    
// }