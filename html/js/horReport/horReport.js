$(document).ready(function(){
    var horNum = '';
    let query = new URLSearchParams(window.location.search);

    if (query.has('user')) {
        $.ajax({
            method: "GET",
            url: "/THKH/laravel/api/showreports/user",
            headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        }).done(
            function(data){
                // $("#reportpage").removeAttr('hidden');
                $("#reportpage").append(` 
                    <tr style="height:50px; background-color:white">
                        <th>HorNum</th>
                        <th>Inccident Date</th>
                        <th>Inccident Time</th>
                        <th>Affected Nric</th>
                        <th>Affected Name</th>
                        <th>Admit Date</th>
                        <th>Admit Time</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Void</th>
                    </tr>
                    `);
                $.each(data.Hors,function(key,reportpage){
                    $("#reportpage").append(` 
                    <tr>
                        <td>${reportpage.horNum}</td>
                        <td>${reportpage.a_inccidentDate}</td>
                        <td>${reportpage.a_inccidentTime}</td>
                        <td>${reportpage.c_affectedNrie}</td>
                        <td>${reportpage.c_affectedName}</td>
                        <td>${reportpage.c_affectedAdmitTime}</td>
                        <td>${reportpage.c_affectedAdmitDate}</td>
                        <td>${reportpage.completion_status}</td>
                        <td><button onclick= "sendToUpdate('${reportpage.horNum}');">Update</button></td>
                        <td><button onclick= "showForm('${reportpage.horNum}');">Void</button></td>
                    </tr>
                    `);
                })
            }
        )
        .fail(
            function(err){
                console.log(err.responseText);
            }
        );
    } else {
        $.ajax({
            method: "GET",
            url: "/THKH/laravel/api/showreports",
            // headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        }).done(
            function(data){
                // $("#reportpage").removeAttr('hidden');
                $("#reportpage").append(` 
                    <tr style="height:50px; background-color:white">
                        <th>HorNum</th>
                        <th>Inccident Date</th>
                        <th>Inccident Time</th>
                        <th>Affected Nric</th>
                        <th>Affected Name</th>
                        <th>Admit Date</th>
                        <th>Admit Time</th>
                        <th>Status</th>
                    </tr>
                    `);
                $.each(data.Hors,function(key,reportpage){
                    $("#reportpage").append(` 
                    <tr>
                        <td>${reportpage.horNum}</td>
                        <td>${reportpage.a_inccidentDate}</td>
                        <td>${reportpage.a_inccidentTime}</td>
                        <td>${reportpage.c_affectedNrie}</td>
                        <td>${reportpage.c_affectedName}</td>
                        <td>${reportpage.c_affectedAdmitTime}</td>
                        <td>${reportpage.c_affectedAdmitDate}</td>
                        <td>${reportpage.completion_status}</td>
                    </tr>
                    `);
                })
            }
        )
        .fail(
            function(err){
                console.log(err.responseText);
            }
        );
    }
    
    $("#voidBtn").click(function(e) {
        e.preventDefault();
        selectedHor = $("#voidBtn").val();
        console.log(selectedHor);
        console.log($("#voidReason").val())
        // $.ajax(
        //     {
        //     method:"get",
        //     url:"/THKH/laravel/api/delete/" + selectedHor,
        //     dataType:"json",
        //     // headers:{Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        //     data: {name:search},
        //     success: function(response){
                    
        //         },
    
    
        //     error: function(){
                
        //     }
                
        // });
    });
});

function SearchName(){

    search = document.getElementById("search").value;
           
    $.ajax(
        {
        method:"get",
        url:"/THKH/laravel/api/search",
        dataType:"json",
        // headers:{Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        data: {name:search},
        success: function(response){
            console.log(response.reports);
            
                $("#reportpage").empty();
                $("#reportpage").append(` 
                    <tr style="height:50px; background-color:white">
                        <th style="width:15%">HorNum</th>
                        <th style="width:25%">Inccident Date</th>
                        <th style="width:25%">Inccident Time</th>
                        <th style="width:25%">Affected Nric</th>
                        <th style="width:25%">Affected Name</th>
                        <th style="width:25%">Admit Date</th>
                        <th style="width:40%">Admit Time</th>
                        <th style="width:30%">Status</th>
                    </tr>
                    `);
                if(response.reports.length == 0){
                    $("#msg").append("No results found");
                }
                else{
                $.each(response.reports, function(key,reportpage){
                    $("#reportpage").append(` 
                    <tr>
                    <td>${reportpage.horNum}</td>
                    <td>${reportpage.a_inccidentDate}</td>
                    <td>${reportpage.a_inccidentTime}</td>
                    <td>${reportpage.c_affectedNrie}</td>
                    <td>${reportpage.c_affectedName}</td>
                    <td>${reportpage.c_affectedAdmitTime}</td>
                    <td>${reportpage.c_affectedAdmitDate}</td>
                    <td>${reportpage.completion_status}</td>
                    </tr>
                    `);
                });
            }
                
            },


        error: function(){
            console.log("error, failed to pass through url");
        }
            
    });
    return false;
};

function sendToUpdate(horNum) {
    role = sessionStorage.getItem("role");
    window.location.href = role + '.html?horNum=' + horNum;
};

function showForm(horNum) {
    $("#popupForm").css({"display":"block"});
    $("#overlay").css({"display":"block"});
    $("#voidReason").val("");
    $("#voidBtn").val(horNum);
}

function closeForm() {
    $("#popupForm").css({"display":"none"});
    $("#overlay").css({"display":"none"});
}