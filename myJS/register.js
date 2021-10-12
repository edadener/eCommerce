$(document).ready(function () {


    $('#registerForm').submit(function (e) {
        e.preventDefault();

        const name = $('#userName').val();
        const surname = $('#userSurname').val();
        const phone = $('#userPhone').val();
        const email = $('#email').val();
        const password = $('#password').val();


        const pushObj =
        {
            ref: "4ecab30b408aa3fc16eb058d13a35703",
            userName: name,
            userSurname: surname,
            userPhone: phone,
            userMail: email,
            userPass: password
        }

        const url = "https://www.jsonbulut.com/json/userRegister.php";
        $.ajax({
            type: "get",
            url: url,
            data: pushObj,
            dataType: "json",
            success: function ( res ) {

                console.log(res)

                const status = res.user[0].durum;
                const message = res.user[0].mesaj;

                if(status) {
                    alert(message);
                    window.location.href = "login.html"
                }
                else{
                    alert(message)
                }
              }
        })
       
       })
  })