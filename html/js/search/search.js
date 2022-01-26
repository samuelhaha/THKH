// $(document).ready(function () {
function SearchName(){

    // $("#search").keyup(function(e){
    // e.preventdefault;
    // $('#search').on('keyup', function(){

    // console.log("enter is pressed");
    // var key = e.which;
        
        
        // if(key == 13) {
            $("#searchform").submit();
            var search = $("#search").val();
            //console.log("search input is: " + search);
           
            
            $.ajax(
                {
                method:"GET",
                url:"/THKH/laravel/api/search?name="+ search,
                dataType:"json",
                //headers:{Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
                data: search,
                success: function(response){
                    console.log(response.report);
                    $.each(response.reports, function(key,report){
                        $("#table").append(`
                        <tr style="height:30px">\
                            <td>`+report.c_affectedName+`</td>\
                            <td>`+report.a_inccidentDate+`</td>\
                            <td>`+report.a_inccidentTime+`</td>\
                            <td>`+report.status_rps+`</td>\
                        </tr>`);
                        
                    });
        
                },
                error: function(){
                    console.log("error, failed to pass through url");
                }
                
            });
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
