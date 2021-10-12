$(document).ready(function() {
  const session = sessionStorage.getItem("userId");
  const userId = JSON.parse(session) 
  console.log(userId.userId)

  if(userId == null) {
  let html = `
   <div id="emptyCart">
        <h5>Your have no order</h5>
        <a href="categories.html">Let's order something</a>
    </div>
   ` ;
   $('#emptyCart').html(html)
  }

else {

        const url = "https://www.jsonbulut.com/json/orderList.php"
        const data = {
            ref: "4ecab30b408aa3fc16eb058d13a35703",
            musterilerID: userId.userId
        }
        
        $.ajax({
            type: "GET",
            url: url,
            data: data,
            dataType: "json",
            success: function( res ) {
                // console.log(res.orderList[0])

                 $('#emptyCart').hide()

                let html =``;
               for (let i = 0; i < res.orderList[0].length; i++) {
                   const element = res.orderList[0][i];
                   console.log(element)

                    html += `
                   
                    <div class="card">
                     <h6>`+element.urun_adi+`</h6>
                     <img src="`+element.normal+`" alt="" >
                    
                    </div>
                   `;
                  

               $('.orders').html(html);
            }
              

              
            },error: function( err ) {
                console.err(err);
            }
        
        });

     
    }




    });  
