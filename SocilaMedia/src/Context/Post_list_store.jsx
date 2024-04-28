import { createContext, useContext,useReducer } from "react";

export const Postlist=createContext({
  postlist:[],
  add:()=>{},
  delte:()=>{}
});
const postlistreducer=(currentpost,action)=>{
  return currentpost;
}
 const Postlistprovider=({children})=>{
  const [postlist,dispatchList]=useReducer(postlistreducer,DEFAULT_POST_LIST);
  const addpost=()=>{
    
  }
  const deltepost=()=>{

  }

  return(
    <Postlist.Provider value={{postlist,addpost,deltepost}}>
      {children}
    </Postlist.Provider>
  )
 }
 const DEFAULT_POST_LIST=[{
  id:'1',
  userid:'anish@345',
  reaction:2,
  title:'Going to Mumbai',
  body:'H1 Freinds! I am going on a vacation',
  tags:['#vacation','#Mumbai','#Enjoying'],
  disreaction:4
 },
 {id:'1',
 userid:'nisha@35',
 reaction:15,
 title:'FINALLY PASS',
 body:'H1 Freinds! I am going on a vacation',
 tags:['#Graduating','#Unbelivable'],
 disreaction:0
}];
 export default Postlistprovider;