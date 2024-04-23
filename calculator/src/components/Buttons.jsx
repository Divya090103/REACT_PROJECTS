import styles from "./Container.module.css"
const Buttons=({onButtonClick})=>{
const butn=["7","8","9","DEL","4","5","6","+","1","2","3","-",".","0","/","*","RESET","="]
  return(
<div className="button-grps container">
        <div className="container row">
          {butn.map(item=>  <button  onClick={()=>onButtonClick(item)} key={item} className={`${styles.btns} p-2 col-lg-3 fs-5 ms-2 mt-2 `}>{item}</button>)}
        </div>
  
      
      </div>
    );
}
export default Buttons;