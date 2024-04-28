import { createContext, useContext,useReducer } from "react";

export const Postlist=createContext({
  postlist:[],
  add:()=>{},
  delte:()=>{}
});
const postlistreducer=(currentpost,action)=>{
  let newlist=[...currentpost]
  if(action.type==='Delete'){
  newlist=currentpost.filter((postlist)=>postlist.id!=action.payload.postid);
  }
  if(action.type==="Add"){
    action.payload.id=Math.random();
    newlist=[action.payload,...currentpost];
  }
  return newlist;
}
 const Postlistprovider=({children})=>{
  const [postlist,dispatchList]=useReducer(postlistreducer,DEFAULT_POST_LIST);
  const add=(id,title,cnt,tags,like,dislike)=>{
    console.log(`${id},${title} ${cnt} ${tags} ${like} ${dislike}`);
    dispatchList(
      {
        type:'Add',
        payload:{
           userid:id,
           title:title,
           body:cnt,
           tags:tags,
          reaction:like,
           disreaction:dislike}
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

  return(
    <Postlist.Provider value={{postlist,add,deltepost}}>
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
 {id:'2',
 userid:'nisha@35',
 reaction:15,
 title:'FINALLY PASS',
 body:'H1 Freinds! I am going on a vacation',
 tags:['#Graduating','#Unbelivable'],
 disreaction:0
}];
 export default Postlistprovider;