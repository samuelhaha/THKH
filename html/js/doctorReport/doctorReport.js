
$(document).ready(function () {
  let getId = new URLSearchParams(window.location.search);

    
    $("#submitBtn").click(function (e) {
      e.preventDefault();
      var i_dt_reportFile = $('#i_dt_reportFile').prop('files')[0];
      var i_dt_report = document.getElementById("i_dt_report").value;
      var form_data = new FormData();
      form_data.append('i_dt_report',i_dt_report);
      form_data.append('i_dt_reportFile',i_dt_reportFile);

      if (getId.has('id')) {
        id = getId.get('id');
      $.ajax({
        method: "POST",
        url: "/THKH/laravel/api/doctor-add/" + id,
        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        data: form_data,
        dataType: 'json',
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
  