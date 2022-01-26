
$(document).ready(function () {
    $("#sup_form").submit(function (e) {
      e.preventDefault();
      var h_sp_factors = document.getElementById("h_sp_factors").value;
      var h_sp_recommend = document.getElementById("h_sp_recommend").value;
      var h_sp_reportFile = $("input[name='h_sp_reportFile']").value;
      var date = document.getElementById("date").value;
      var time = document.getElementById("time").value; 
      $.ajax({
        method: "POST",
        url: "/THKH/laravel/api/supervisor-add",
        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        data: {
          h_sp_factors: h_sp_factors,
          h_sp_recommend: h_sp_recommend,
          h_sp_reportFile: h_sp_reportFile,
          date: date,
          time: time
        },
        success: function (response) {
         console.log(response);
        },
        
      })
    })
  });
  