import styles from './Login.module.css';
import Usercontext from '../Context/Usercontext';
import { useContext } from 'react';
import { useState } from 'react';
const Login=()=>{
  const [user,setuser]=useState("")
  const [password,setpassword]=useState("");
  const {setstate}=useContext(Usercontext);
  const submit=(e)=>{
    e.preventDefault();
    setstate({user,password});
  }
return(
  <>
  <div className={`${styles.contain} container p-4`}>
    <input type="text" placeholder="UsreName" className="bg-primary p-3" value={user} onChange={(e)=>{setuser(e.target.value)}}/>
    <br></br>
    <input type="password" placeholder="Password" className='p-3'value={password} onChange={(e)=>{setpassword(e.target.value)}}/><br></br>
    <button className="btn btn-primary" onClick={submit}>Submit</button>
  </div>
  </>
)
}

export default Login;