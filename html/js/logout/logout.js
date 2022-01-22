
$(document).ready(function () {
    $("#Logout").on('click',function (e) {
      e.preventDefault();
      $.ajax({
        method: "POST",
        url: "/THKH/laravel/api/logout",
        headers: {Authorization: 'Bearer ' + sessionStorage.getItem("jwt")},
        success: function (response) {
          //console.log(response.user);
          alert("logout successful!");
        //   window.sessionStorage.removeItem("jwt");
          window.sessionStorage.clear(); //Remove all saved data from sessionStorage
          window.location.href = '/THKH/html/views';
        },
        
      })
    })
  });