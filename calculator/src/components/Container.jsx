
import styles from "./Container.module.css"
import Buttons from "./Buttons";
import { useState } from "react";
function Container(){
const [data,setdata]=useState([]);
const handlebutton=(key)=>{
if(key==="DEL") 
{

  console.log(data);
setdata([...data.slice(0,-1)]);
}
else if(key==="="){
 let result=eval(data.join(''));
 setdata(result)
}
else if(key==="RESET"){
  setdata("");

}else {
  const val=data+key;
  setdata([val])
}
}
  return(
    <>
    <div className={`${styles.area} container area mt-3 p-2`}>
      <center>
      <input className={`${styles.inp}`} value={data} readOnly></input>
      <Buttons onButtonClick={handlebutton}/>
      </center>
    </div>
    </>
  );
}

export default Container;