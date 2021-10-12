$(document).ready(function() {
    // const productId = localStorage.getItem("productId");  
     const item = JSON.parse( localStorage.getItem("productEda"));
     const session = sessionStorage.getItem("userId");
     const user = JSON.parse(session) 
     //console.log(user)
    
     if(item !== null) {
         $('#empty').hide()
       
     }
  
    $('.btnConfirm').show()
    $('.btnDelete').show()
      
    
      console.log(item)
     
        let html = `
         <div class="row">
         <div class="col-sm-9 product">
             <h4>`+item.productName+`</h4>
             <span>`+item.price+` ₺</span>
             <hr>
        </div>
     </div> `;
 
     localStorage.setItem("proId", JSON.stringify(item.productId))
      
    
     $('.container').append(html);    
     
   
 
     $('.btnConfirm').click(function (e) { 
         e.preventDefault();
       const proId = localStorage.getItem("proId")
       const productId = JSON.parse(proId)
       console.log(proId)
    
         if( user == null ){
             alert("You have to login for order")
             window.location.href = "login.html"
         }  
         const url = "https://www.jsonbulut.com/json/orderForm.php"
         const data = {
             ref: "4ecab30b408aa3fc16eb058d13a35703",
             customerId: user.userId,
             productId: productId,
             html: user
         }
         
         $.ajax({
             type: "GET",
             url: url,
             data: data,
             dataType: "json",
             success: function( res ) {
                 console.log(res)
               const status = res.order[0].durum 
               const message = res.order[0].mesaj
    
               if(status) {
                   alert(message);
                   window.location.href = "cart.html"
                   localStorage.clear()
                   
               }
 
               
             },error: function( err ) {
                 console.err(err);
             }
         
         });
 

     });  
 
     $('.btnDelete').click(function (e) { 
         e.preventDefault();
         localStorage.clear(); 
         window.location.href = "cart.html"
    })
  
 
 })