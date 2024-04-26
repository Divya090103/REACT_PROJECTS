import React ,{useContext} from "react";
import Usercontext from "../Context/Usercontext";
function Profile(){

    const {state}= useContext(Usercontext);
    if(!state){
      return <div>Please Login</div>
    }else return<div>Welcome {state.user}</div>

}
export default Profile;