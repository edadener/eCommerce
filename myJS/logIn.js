$(document).ready(function () {

    $("#loginform").submit(function (e) {
      e.preventDefault();
  
      const email = $("#email").val();
      const password = $("#password").val();
  
      const pushObj = {
        ref: "4ecab30b408aa3fc16eb058d13a35703",
        userEmail: email,
        userPass: password,
        face: "no"
      };
      const url = "https://www.jsonbulut.com/json/userLogin.php";
  
      $.ajax({
        type: "GET",
        url: url,
        data: pushObj,
        dataType: "json",
        success: function (response) {
          const status = response.user[0].durum;
          const message = response.user[0].mesaj;
          if (status) {
              const item = response.user[0];
             // console.log(item);

             const userId = item.bilgiler.userId;

             // session create
             sessionStorage.setItem("userId", JSON.stringify(item.bilgiler))

              // redirect
              alert(message);
              window.location.href = "index.html";

            } else {
              alert(message);
            }
        }
      });
    });
  });