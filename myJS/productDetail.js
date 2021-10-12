$(document).ready(function() {
    const categoryId = localStorage.getItem("categoryId");

    if(categoryId == null) {
        window.location.href = "categories.html"
    }

    const url = "https://www.jsonbulut.com/json/product.php"
    
    const data = {
        ref: "4ecab30b408aa3fc16eb058d13a35703",
        start: "0",
        count: 26,
        categoryId: categoryId,
        order: "asc"
    }
    
    $.ajax({
        type: "GET",
        url: url,
        data: data,
        dataType: "json",
        success: function( res ) {
        
           detailResult(res)       
          
        },error: function( err ) {
            console.err(err);
        }
    
    });


    function detailResult(res) {
        let urlStr = window.location.href;
        let url = new URL(urlStr);
        let a = url.searchParams.get("product")
       // console.log(a)

       let html = ``;

       for (let i = 0; i < res.Products[0].bilgiler.length; i++) {
           const item = res.Products[0].bilgiler[i];
          // console.log(item)


           if(item.productId == a) {


          
           const eda =  JSON.stringify(item)
           localStorage.setItem('productEda', eda)
             
                              html += `
                                     <div class="product">
                                     <img src="`+item.images[0].normal+`" alt="">
                                     <h5>`+item.productName+`</h5>
                                     <p>`+item.description+`</p>
                                     <span>`+ item.brief+`</span>
                                     <span>`+item.price+` ₺</span>
                                     <a id="addCart" class="eda" href="#" >Add to Cart</a>
                                 </div>
                                  `;
                                

                              
           }
     
         
            
           
       }
     
                                           
          $('.product').html(html);


          $('a').click(function (e) { 
            e.preventDefault();
          window.location.href = "cart.html"
         
        });
                             
                           }
                        


})