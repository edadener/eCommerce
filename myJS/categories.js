$(document).ready(function() {

    const pUrl = "https://www.jsonbulut.com/json/companyCategory.php?ref=4ecab30b408aa3fc16eb058d13a35703"
    $.ajax({
        type: "GET",
        url: pUrl,
        dataType: "json",
        success: function( res ) {
            //console.log(res);
               result(res)
            
          
        },error: function( err ) {
            console.err(err);
        }

    });

   function result(res) {


    const statusC = res.Kategoriler[0].durum;
    if(statusC){
        const item = res.Kategoriler[0];

        const categoryId = item.Categories.CatogryId;
         // session create
         localStorage.setItem("categoryId", JSON.stringify(item.bilgiler))


        let genres = ` <p>Filter by Genres</p>`
        for (let i = 0; i < item.Categories.length; i++) {
            const element =  item.Categories[i];

            const categoryId = element.CatogryId;

            genres += ` <a href="/categories.html?categoryId=`+categoryId+`">`+element.CatogryName+`</a> `  



        }


$('#genres').html(genres);
    }
}

// pull id from url  
// let url ='http://127.0.0.1:5500/categories.html?category=1872'
// let nurl = new URL(url);
// let searchp = nurl.searchParams
// let cat = searchp.get("category")
// console.log(cat)



const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("categoryId")

let items = [];
$(document).ready(function() {
const url = "https://www.jsonbulut.com/json/product.php";

const data = {
    ref: "4ecab30b408aa3fc16eb058d13a35703",
    start: 0,
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
          proResult(res)
      
    },error: function( err ) {
        console.err(err);
    }

});


function proResult(res) {
    const status = res.Products[0].durum;
                if(status){

                    let html = ``;

                            for (let i = 0; i < res.Products.length; i++) {
                                const item = res.Products[i];
                                localStorage.setItem("id", JSON.stringify(item))
                                const datas = item.bilgiler 
                                // console.log(datas)
                               let ns;
                               for (let j = 0; j < datas.length; j++) {
                                   const itm = datas[j];
                                   // console.log(itm)

                                   
                    
                                   for (let k = 0; k < itm.images.length; k++) {
                                       const element = itm.images[k];
                                        // console.log(element.normal)
                                       
                                  let summary = itm.brief
                                  if(summary.length > 20) {
                                      ns = summary.substring(0,25) + "..";
                                      // console.log(ns)
                                  }
                                  else {
                                      ns = summary;
                                  }
                    
                                  html += `
                                  
                                <div class="card">
                                  <h6>`+itm.productName+`</h6>
                                  <img src="`+element.normal+`" alt="" >
                                  <p>`+ns+`</p>
                                  <span>`+itm.price+` ₺</span>
                                  <a id="addCart" href="/productDetail.html?product=`+itm.productId+`">See more info..</a>
                                </div>
                                  
                                  `;   
                              
                               }
                    
                            }
                            }
                           
                            $('.books').html(html); 
                      
                        }  
                
 }
});
});

