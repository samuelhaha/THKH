// $(document).ready(function () {
function SearchName(){

    // $("#search").keyup(function(e){
    // e.preventdefault;
    // $('#search').on('keyup', function(){

    // console.log("enter is pressed");
    // var key = e.which;
        
        
        // if(key == 13) {
            // $("#searchform").submit();
            search = document.getElementById("search").value;
            // console.log("search input is: " + $("#search").val());

            
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
    // }
    // else{
    //     console.log("please press enter");
    // }
    // })
   
    // var value = $(this).val().toLowerCase();
    // $(".box-wrapper tr").filter(function(){
    //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    // });


    // search = document.getElementById("search").value;
    // $(#submit).on('click',function(){
        
    // });

    // $('#search').keyup(function(event) { 
    //     if (event.which === 13)
    //     {
    //         event.preventDefault();
    //         document.querySelector('searchform').submit();
    //         console.log(document.getElementById('search'));
    //     }
    // });

    // $(function() {
    //     $('searchform').on('keypress', function(e){
    //       if(e.keyCode == '13'){
    //         // enter pressed
    //         e.preventDefault();
    //         $('search').trigger('click'); 
    //       } 
    //     });
    // });


    
   
// }; 
// });
