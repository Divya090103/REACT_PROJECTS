import React from "react";
import Usercontext from "./Usercontext";
import { useState } from "react";
const Usercontextprovider=({children})=>{
  const [state ,setstate]=useState(null);

  return(
    <>
    <Usercontext.Provider value={{state,setstate}}>
    {children}
    </Usercontext.Provider>

    </>
  )

}
export default Usercontextprovider;