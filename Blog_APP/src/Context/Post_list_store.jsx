import { createContext, useContext,useReducer } from "react";

export const Postlist=createContext({
  postlist:[],
  add:()=>{},
  Intailpost:()=>{},
  delte:()=>{}
});
const postlistreducer=(currentpost,action)=>{
  let newlist=[...currentpost]
  if(action.type==='Delete'){
  newlist=currentpost.filter((postlist)=>postlist.id!=action.payload.postid);
  }
 else if(action.type==="Add"){
    newlist=[action.payload,...currentpost];
  }
  else if(action.type==="Initial"){
    newlist=action.payload.posts;
  }
  return newlist;
}
 const Postlistprovider=({children})=>{
  const [postlist,dispatchList]=useReducer(postlistreducer,[]);
  const add=(post)=>{
    dispatchList(
      {
        type:'Add',
        payload:(post)
      }
    );

    
  }
  const deltepost=(postid)=>{
    console.log(`${postid}`)
   dispatchList({
    type:"Delete",
    payload:{postid},
   });

  }
  const Intailpost=(posts)=>{
    dispatchList(
      {type:"Initial",
      payload:{posts}
    });

  }

  return(
    <Postlist.Provider value={{postlist,add,Intailpost,deltepost}}>
      {children}
    </Postlist.Provider>
  )
 }

 export default Postlistprovider;