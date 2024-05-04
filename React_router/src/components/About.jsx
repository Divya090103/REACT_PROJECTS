import React from "react";
import { NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";
export default function About(){
  const navigate=useNavigate();
  const goto=()=>{
    navigate('/contact');
  }
  return(
    <>

   <h2>About page</h2>
   <button onClick={goto}>Go to contact page</button>
    </>
  );
}