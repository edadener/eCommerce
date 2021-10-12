$(document).ready(function() {


    const url = "https://www.jsonbulut.com/json/news.php?ref=4ecab30b408aa3fc16eb058d13a35703&start=3&count=8";

    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function( res ) {
            dataResult( res );
        },
        error: function( err ) {
            console.err( err );
        }
    
    });

    function dataResult(res) {
        let html = ``

       for (let i = 0; i < res.News.length; i++) {
           const item = res.News[i];
           // console.log(item)

           for( let j = 0; j < item.Haber_Bilgileri.length; j++){
               const itm = item.Haber_Bilgileri[j]
            console.log(itm)


            html += `
            
            <div class="news" id="news">
            <div class="card">
              <h6>`+itm.title+`</h6>
              <img src="`+itm.picture+`" alt="" >
              <span>`+itm.l_description+`</span>
              <p>`+itm.s_description+`</p>
              
            </div>
           </div>

            `;

           }
           
            
        }

        $('#news').html(html);
    }



    






});