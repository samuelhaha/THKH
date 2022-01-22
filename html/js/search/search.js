$(document).ready(function () {
   
    // var value = $(this).val().toLowerCase();
    // $(".box-wrapper tr").filter(function(){
    //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    // });


    search = document.getElementById("search").value;
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

    $.ajax({
        type:"GET",
        url:"http://localhost/THKH/laravel/api/display-data",
        dataType:"json",
        headers:{Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        data: {
            search:search
        },
        success: function(response){

            $.each(response.reports, function(key,report){
                $("#table").append(`
                   <tr style="height:30px">\
                       <td>`+report.c_affectedPerson+`</td>
                       <td>`+report.a_inccidentDate+`</td>
                       <td>`+report.a_inccidentTime+`</td>
                       <td>`+report.status_rps+`</td>
                   </tr>`);
                
            });

        }
        
    });
    
   
   
});
