
$(document).ready(function () {
  let getId = new URLSearchParams(window.location.search);

    
    $("#submitBtn").click(function (e) {
      e.preventDefault();
      var h_sp_reportFile = $('#h_sp_reportFile').prop('files')[0];
      var h_sp_factors = document.getElementById("h_sp_factors").value;
      var h_sp_recommend = document.getElementById("h_sp_recommend").value;
      var form_data = new FormData();
      form_data.append('h_sp_factors',h_sp_factors);
      form_data.append('h_sp_recommend',h_sp_recommend);
      form_data.append('h_sp_reportFile',h_sp_reportFile);
      //var h_sp_reportFile = $("input[name='h_sp_reportFile']").value;
      // var date = document.getElementById("date").value;
      // var time = document.getElementById("time").value; 

      if (getId.has('id')) {
        id = getId.get('id');
      $.ajax({
        method: "POST",
        url: "/THKH/laravel/api/supervisor-add/" + id,
        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        data: form_data,
        dataType: 'json',
        // data: {
        //   h_sp_factors: h_sp_factors,
        //   h_sp_recommend: h_sp_recommend,
        //   h_sp_reportFile: h_sp_reportFile,
        // },
        success: function (response) {
         console.log(response);
         $(".msg").append(response.msg);
         $(".uploaded_image").append(response.uploaded_image);
        },
        cache: false,
        contentType: false,
        processData: false
      });
    }
    });
  });
  