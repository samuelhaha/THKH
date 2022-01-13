
$(document).ready(function () {
  $("#login_form").submit(function (e) {
    e.preventDefault();
    var staffid = document.getElementById("staff_id").value;
    var password = document.getElementById("password").value;
    $.ajax({
      method: "POST",
      url: "/THKH/laravel/api/check",
      data: {
        staff_id: staffid,
        password: password,

      },
      success: function (response) {
        //console.log(response.user);
        if(response.user == undefined){
          //$("#msg").append("Wrong Credentials entered!");
          alert("Wrong credentials entered! Please check your staff id and password");
        }
        else{
          window.localStorage.setItem("jwt", response.token); //comment out if using cookie
          window.location.href = 'login.html';
        }
      },
      
    })
  })
});
