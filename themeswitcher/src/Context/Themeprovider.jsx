import React from "react";
import Theme from "./Theme"
import { useState } from "react";
const [state,setstate]=useState("")
const Themeprovider=({children})=>{ 
  <Usercontext.provider value={[state, setstate]}>
    {/* <Theme.Provider theme={{mode: state}}>{children}</Theme.Provider> */}

  </Usercontext.provider>

}
export default Themeprovider;