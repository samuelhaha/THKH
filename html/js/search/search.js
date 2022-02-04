
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
            
                $("#table").find('tbody').empty();
                if(response.reports.length == 0){
                    $("#msg").append("No results found");
                }
                else{
                $.each(response.reports, function(key,report){
                $("#table").find("tbody").append(`
                <tr style="height:30px">\
                    <td>`+report.c_affectedName+`</td>\
                    <td>`+report.a_inccidentDate+`</td>\
                    <td>`+report.a_inccidentTime+`</td>\
                    <td>`+report.status_rps+`</td>\
                </tr>`);
                });
            }
                
            },


        error: function(){
            console.log("error, failed to pass through url");
        }
            
    });
    return false;
}
