$(document).ready(function() { 
    const user = sessionStorage.getItem("userId");
    if( user == null) {

        alert('Please Log In')
        window.location.href = "index.html";
    }
    else {
        // session true
        const obj = JSON.parse(user);

        const account = 
        `
        <div class="account">
             <span> User Name : <p>`+obj.userName+`</p></span><br>
             <span> User Surname :  <p>`+obj.userSurname+`</p></span><br>
             <span> User Mail :  <p>`+obj.userEmail+`</p></span><br>
             <span> User Phone : <p>`+obj.userPhone+`</p></span><br>
             <span> User Pass : <p>********</p></span><br>
             <button id="logOut" class="btn btn-danger">Log Out</button>
             <button id="change" class="btn btn-primary">Change Item</button>
             
               
        </div>
        `;

        $('.account').append(account);

        $('#change').click(function (e) { 
            e.preventDefault();

            $('.account').hide()


            const changeItems = `
            <hr>
            <form id="registerForm">

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">User Name</label>
              <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="`+obj.userName+`">
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">User Surname</label>
              <input type="text" class="form-control" id="surname" placeholder="`+obj.userSurname+`">
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">User Mail</label>
                <input type="email" class="form-control" id="mail" placeholder="`+obj.userEmail+`">
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">User Phone</label>
                <input type="phone" class="form-control" id="phone" placeholder="`+obj.userPhone+`">
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">User Password</label>
                <input type="password" class="form-control" id="password"  placeholder="*******">
              </div>

            <button id="register" type="submit" class="btn btn-primary">Register</button>
          </form>
            
            
            `;

            $('.form').append(changeItems);

           

            //  $('#register').click(function(e) {
            //      e.preventDefault();

                $('#registerForm').submit(function (e) { 
                    e.preventDefault();

                    const id = obj.userId
                    const name = $('#name').val();
                    const surname = $('#surname').val();
                    const mail = $('#mail').val();
                    const phone = $('#phone').val();
                    const password = $('#password').val();

                 
        
                    const pushObj = {
                        ref:"4ecab30b408aa3fc16eb058d13a35703",
                        userId: id,
                        userName: name,
                        userSurname: surname,
                        userMail: mail,
                        userPhone: phone,
                        userPass: password,
                        
                    }
                    console.log(pushObj)
        
                    const url = "https://www.jsonbulut.com/json/userSettings.php";
        
                    $.ajax({
                        type: "GET",
                        url: url,
                        data: pushObj,
                        dataType: "json",
                        success: function ( res) {
                            console.log(res)

                            const status = res.user[0].durum;
                            const message = res.user[0].mesaj;

                            if(status){
                                alert(message)
                                window.location.href= "profile.html";
                            }
                            else {
                                alert(message)
                                window.location.href= "profile.html";
                            }
                        }
                    });
             
                });

            
            



            
        });

        $('#logOut').click(function () {
            const answer = confirm('Are you sure leave me?');
            if(answer) {
                sessionStorage.clear()
                window.location.href = "index.html"
            }
            return false
        })
    }
    




   







})