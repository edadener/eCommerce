$(document).ready(function() {

  const session = sessionStorage.getItem("userId");
  const user = JSON.parse(session)

  if(session != null) {
    const header = `
    <div class="header">
    <div class="headerLeft">
      <a href="index.html"><img src="images/book.png" > </a>
      <h3><span>ED </span>BOOK</h3>
    
    </div>
    
    
    
    <div class="headerMid">
    <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search Book" aria-label="Search">
    <button class="btn btn-outline-danger" type="submit">Search</button>
  </form>
    </div>
       
    <div class="headerRight">
    
          <div class="dropdown">
            <button class="dropbtn">Hello, <a href="logIn.html">`+user.userName +`</a> <img src="images/arrow.png" > </button>
            <div class="dropdown-content">
            <a href="profile.html"><span>Other things?</span> User Account</a>
            </div>
          </div>
    
    
          <div class="cart">
            <a href="orders.html">Orders</a>
           <a href="cart.html"><img src="images/cart.png" alt=""></a>
          </div>
     
    
    </div>
    
    
    `;
    
    $('.header').append(header);
  }

else {
  const header = `
  <div class="header">
  <div class="headerLeft">
    <img src="images/book.png" >
    <h3><span>ED </span>BOOK</h3>
  
  </div>
  
  
  
  <div class="headerMid">
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search Book" aria-label="Search">
    <button class="btn btn-outline-danger" type="submit">Search</button>
  </div>
     
  <div class="headerRight">
  
        <div class="dropdown">
          <button class="dropbtn">Hello, <a href="logIn.html">Sign in </a><img src="images/arrow.png" > </button>
          <div class="dropdown-content">
          <a href="register.html"><span>New Customer?</span> Start Here</a>
          </div>
        </div>
  
  
        <div class="cart">
          <a href="orders.html">Orders</a>
         <a href="cart.html"><img src="images/cart.png" alt=""></a>
        </div>
   
  
  </div>
  
  
  `;
  
  $('.header').append(header);
}


});