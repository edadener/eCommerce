$(document).ready(function() {

    const url = "https://www.jsonbulut.com/json/companyCategory.php?ref=4ecab30b408aa3fc16eb058d13a35703";
  
  $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function( res ) {
           //console.log(res);
      data(res)

             
      },
      error: function( err ) {
          console.err(err);
      }
  });

function data(res) {
    let footer = ``;

    for (let i = 0; i <  res.Kategoriler.length; i++) {

        const item = res.Kategoriler[i];

     footer += `

    <div class="footer">
        <div class="row">
           
            <div class="col-sm-2"></div>

            <div class="col-sm-3 downLogo">
                <img src="images/footerBook.png" alt="">
                <p>“Logic will get you from A to Z; imagination will get you everywhere.”</p>
                <p>― Albert Einstein</p>
                <img src="images/facebook.png" alt="">
                <img src="images/linkedin.png" alt="">
                <img src="images/instagram.png" alt="">

            </div>
            <div class="col-sm-3 category">
                <h5> CATEGORIES</h5>`

                for (let j = 0; j < item.Categories.length; j++) {
                    const element = item.Categories[j];
              
                    const categoryId = element.CatogryId;
              
                    footer += ` 
                   <a href="/categories.html?categoryId=`+categoryId+`">`+element.CatogryName+`</a> `;
                   
                  }

                }
  


            footer += `
            </div>
            <div class="col-sm-3 siteMap">
                <h5>Site Map </h5>
                <a href="index.html"><img src="images/home.png" alt="">  Home</a>
                <a href="news.html"><img src="images/blog.png" alt=""> News</a>
                <a href="contect.html"><img src="images/contect.png" alt=""> Contect</a>
                <a href="bestBook.html"><img src="images/bb.png" alt=""> Best Books</a>

            </div>
        </div>


    </div>
    
    
    `;
    
 $('.footer').append(footer);
    

}
});