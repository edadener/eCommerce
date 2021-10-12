$(document).ready(function() {

    const myUrl = "https://www.jsonbulut.com/json/advertisement.php?ref=4ecab30b408aa3fc16eb058d13a35703&advertisementId=52";

    $.ajax({
        type: "get",
        url: myUrl,
        dataType: "json",
        success: function( res ) {
           //console.log( res )
           fncAdvertisement(res)
           
        },
        error: function( err ) {
            console.err( err );
        }
    
    });

   function fncAdvertisement(res) {
       let html = ``;
       const status = res.reklam[0].durum;
          // console.log(status)

           if(status) {
               const item = res.reklam[0];
               // console.log(item.reklam.id)

               html += `
              <div class="advertisement">
              <a href=`+item.reklam.href+` target="_blank">  <h4>`+item.reklam.adi+`</h4></a>
              <a href=`+item.reklam.href+` target="_blank"><img src=`+item.reklam.dosya+` alt=""></a> 
           </div>
               
               `;
           }

           $('.advertisement').html(html)
     }


     $(document).ready(function() {
        const session = sessionStorage.getItem("userId");
        const user = JSON.parse(session) 
       
      
        if(user == null) {
        let html = `
         <div id="emptyCart">
              <h5>Your have no order</h5>
              <a href="categories.html">Let's order something</a>
          </div>
         ` ;
         $('.orders').html(html)
        }
      else {
      
        const url = "https://www.jsonbulut.com/json/orderList.php"
        const data = {
            ref: "4ecab30b408aa3fc16eb058d13a35703",
            musterilerID: user.userId
        }
        
        $.ajax({
            type: "GET",
            url: url,
            data: data,
            dataType: "json",
            success: function( res ) {
                // console.log(res.orderList[0])

                 $('#emptyCart').hide()


                let html = ``;
                
                const a = res.orderList[0].slice(0, 3)
               for (let i = 0; i < a.length; i++) {
                const element =a[i];
                  console.log(element)

              
                    html += `
                    <div class="card">
                    <h5>`+element.urun_adi+`</h5>
                    <img src="`+element.normal+`" alt="" >
                   </div>
                        ` ;
              
                        $('.orders').html(html)
            }
              

              
            },error: function( err ) {
                console.err(err);
            }
        
        });

          }
      
          });  
      


});