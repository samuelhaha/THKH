$(document).ready(function() {
    var role = sessionStorage.getItem("role");
    $.ajax({
        method: "get",
        url: "/THKH/laravel/api/getReports",
        dataType:"json",
        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        success: function(response){
            $.each(response.reports, function(key,report){
                //display date in d/m/YYYY, H:mm:ss AM/PM format
                var d = new Date(report.created_at);
                var date = d.toLocaleString();
                //report.status_(role) <- need update
                $("#table").find("tbody").append(`
                   <tr style="height:30px">\
                       <td class="reportId">${report.id}</td>\
                       <td>${report.c_affectedName}</td>\
                       <td>${date}</td>\
                       <td>${report.completion_status}</td>\
                       <td id="status">${report.status_role}</td>\
                       <td class="reason"></td>\
                       <td><select id="route" disabled><option value="supervisor">sup1</option></select></td>\
                       <td><button type="button" id="edit">Edit Report</button></td>\
                       <td class="returnbtn"><button class="return">Return report to staff</button></td>\
                   </tr>`);
                   //<td><button type="button" id="delete">Delete Report</button><td>\
            });
            //satff would not be able to see the "Return to Staff" button
            if(role == 'rps'){
                $(".returnbtn").hide();
            }
            // else{
            //     $(".reason").hide();
            // }
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
                            $("#msg").append("Returned report to staff with the reason: " + response.reason);
                            console.log(response.reason);
                            $("#msg").css({"color":"green"});
                            if(role == 'rps'){
                                $(".reason").show();
                                $(".reason").append("Reason: " + response.reason);
                            }
                        }
                    });
                }
                
            });
           if($("#status").html() == 'submitted'){
               //able dropdown //currently not working
               //route for staff put in another tab??
                $('#route').prop('disabled', true); 
           }
           $("#edit").click(function(){
            window.location.href = role + '.html';
        });
            // else{
            //     $('#route').prop('disabled', true);
            // }
            
        }
    });
   

 

    
    

});
