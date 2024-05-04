import React from "react";
import { useNavigate } from "react-router";
export default function Contact(){
  const  navigate = useNavigate();
  return(
    <>

   <h3>Conatct page</h3>
   <button onClick={()=>{navigate(-1);}}>previous</button>
    </>
  );
}