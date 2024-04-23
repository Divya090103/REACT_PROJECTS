const Topbar=()=>{
  return(
    <header class="topbar">
    <div class="container">
       <div class="row top">
        <li class="col-lg-3 col-6 list"> 
          <button id="in">
            <i class="bi bi-lock-fill"></i>
            Sign in</button>  
            <div class="log_in">
              <div class="container">
                <div class="btn1"> <button class="none">x</button></div>
                <div class="dis">
                  <div class="frm">
                    <h2><b>SIGN IN</b>NOW</h2>
                    <form class="form-inline">
                      <div class="form-group mb-2 mt-4">
                       <input type="text" placeholder="Name"/>
                      </div>
                      <div class="form-group mb-2 mt-3">
                        <input type="email" name="" id="" placeholder="email"/>
                      </div>
                      <button type="submit" class="btn btn-primary mb-2 btn3">Sign IN </button>
                    </form>
                    <button class="not_acct btn4">Don't have an account? Create one now!</button>
                  </div>
                  
                  <div class="image">
                    <img src="./assets/images_index/log_in.png" alt="" />
                  </div>

                </div>

              </div>
            </div>
          </li>
           
        <li class="col-lg-3 col-6 list"><button>
          <i class="bi bi-pencil-square"></i>
          Sign up</button> </li>
        <li class="col-lg-3 col-6 list">
          <a href="tel:90233546"> 
  <i class="bi bi-telephone-fill"></i>
            Call: 354398750</a></li>
        <li class="col-lg-3 col-6 list">
          <a href="mail_to:ecommerce@gmail.com">
          <i class="bi bi-envelope"></i> [email protected]</a>
            </li>
    </div>
    </div>
  </header>
  );
}
export default Topbar;