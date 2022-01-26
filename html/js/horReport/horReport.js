$(document).ready(function(){
    showreport();
    function showreport(){
        $.ajax({
            method: "GET",
            url: "/THKH2/laravel/api/showreports",
            datatype: "json",
        })
        .done(
    
            function(data){ 
                console.log(data);
                $.each(data.Hors,function(key,reportpage){
                    console.log(reportpage);
                    $("#reportpage").append(` 
                    <tr>
                    <td>${reportpage.id}</td>
                    <td>${reportpage.horNum}</td>
                    <td>${reportpage.a_inccidentDate}</td>
                    <td>${reportpage.a_inccidentTime}</td>
                    <td>${reportpage.b_diagnosis}</td>
                    </tr>
                    `);
                })
            }
        )
        .fail(
            function(err){
                console.log(err.responseText);
            }
        )
    };
});

