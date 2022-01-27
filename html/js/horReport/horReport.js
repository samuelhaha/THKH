$(document).ready(function(){
    // showreport();
    $.ajax({
            method: "GET",
            url: "/THKH/laravel/api/showreports",
            // headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        }).done(
            function(data){ 
                console.log(data);
                $.each(data.Hors,function(key,reportpage){
                    console.log(reportpage);
                    $("#reportpage").append(` 
                    <tr>
                    <td>${reportpage.id}</td>
                    <td>${reportpage.horNum}</td>
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
});

function showreport(){
    $.ajax({
        method: "get",
        url: "THKH/laravel/api/showreports",
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
                <td>${reportpage.horNum} abc</td>
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