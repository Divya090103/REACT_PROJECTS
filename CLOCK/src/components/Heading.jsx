import React from "react";
function Heading(){
  let d=new Date();
  return(
   <>
   <center>
   <h1 className="container">CLOCK</h1>
   <p>The current clock timing in india: </p>
   <div>goes to print date {d.toLocaleDateString()} and time:{d.toLocaleTimeString()}</div>
   </center>
   </>
  )
}
export default Heading;