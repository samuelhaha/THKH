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
<<<<<<< HEAD
                    <td>${reportpage.a_inccidentDate}</td>
                    <td>${reportpage.a_inccidentTime}</td>
                    <td>${reportpage.b_diagnosis}</td>
=======
>>>>>>> f2879cb61792f308a781fb76b89e7503e39e5def
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