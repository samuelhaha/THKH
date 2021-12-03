
  $(document).ready(function(){
   $("#login_form").submit(function(e){
     e.preventDefault();
     let url = $(this).attr('action');
     $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    $.ajax({
      method: "POST",
      url: url,
      data: {
        '_token': $("#token").val(),
        username: $("#username").val(),
        password: $("#password").val(),

      },
      success: function(response){
        console.log(response.code);
        if(response.code == 400){
          let error = response.msg;
          $("#msg").append(error);
        }else if(response.code == 200){
          window.location.href = "/home";
        }
      }
    })
   })
    });
