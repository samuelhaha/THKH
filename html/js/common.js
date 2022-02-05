function sendToCreate() {

    role = sessionStorage.getItem("role");
    window.location.href = role + '.html';
    // console.log(role + '.html');

  }

  function sendToAllView() {

    // role = sessionStorage.getItem("role");
    window.location.href = 'hor.html';
    // console.log(role + '.html');
  }

  function sendToMyView() {

  role = sessionStorage.getItem("role");
  id = sessionStorage.getItem("staff_id");
  window.location.href = 'hor.html?user';
  // console.log(role + '.html');

  }

  
$(document).ready(function () {
    if (!sessionStorage.getItem("jwt")) {
        window.location.href = '/THKH/html/views';
        alert("Please Log in");
    }

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