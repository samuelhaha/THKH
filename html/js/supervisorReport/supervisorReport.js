
$(document).ready(function () {
    $("#sup_form").click(function (e) {
      e.preventDefault();
      // var h_sp_factors = document.getElementById("h_sp_factors").value;
      // var h_sp_recommend = document.getElementById("h_sp_recommend").value;
      //var h_sp_reportFile = $("input[name='h_sp_reportFile']").value;
      // var date = document.getElementById("date").value;
      // var time = document.getElementById("time").value; 

      //var $id =  ;  //how to pass the id?
      $.ajax({
        method: "POST",
        url: "/THKH/laravel/api/supervisor-add/" + $id,
        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        data: new FormData(this),
        dataType: 'json',
        // data: {
        //   h_sp_factors: h_sp_factors,
        //   h_sp_recommend: h_sp_recommend,
        //   h_sp_reportFile: h_sp_reportFile,
        // },
        success: function (response) {
         console.log(response);
         $("#uploaded_image").html(response.uploaded_image);
        },
        
      })
    })
  });
  