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
  let navbar = ``;
  
  for (let i = 0; i <  res.Kategoriler.length; i++) {

    const item = res.Kategoriler[i];
    // console.log(item)


    navbar += ` <div class="navbar">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li>
    <div class="dropdownNav">
    <button class="dropBtn">
    <a href="categories.html">Categories</a></button>
    <div class="dropdownNav-content">
    `
    for (let j = 0; j < item.Categories.length; j++) {
      const element = item.Categories[j];

      const categoryId = element.CatogryId;

      navbar += ` 
     <a href="/categories.html?categoryId=`+categoryId+`">`+element.CatogryName+`</a> `;
     
    }
    
  
  }
   navbar += `
  </div>
  </div>
  </li>
  <li><a href="news.html">News</a></li>
  <li><a href="contect.html">Contact</a></li>
  <li><a href="bestBook.html">Best Books</a></li>
  </ul>
</div>`;

$('.navbar').append(navbar);

}
    });

  