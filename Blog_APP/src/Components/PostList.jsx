import React, { useContext, useEffect, useState} from "react";
import Post from "./Post";
import { Postlist as Posts } from "../Context/Post_list_store";
import Welcome from "./Welcome";
import Loader from "./Loader";
const PostList = () => {
  const { postlist ,Intailpost} = useContext(Posts);
   const [Fetching,setfetching]=useState(false);
  //fetched on the basis of the loader
  useEffect(()=>{
    setfetching(true);
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=>{Intailpost(data.posts)
      setfetching(false);});
  
  },[])

  return (
    <>
    {Fetching && <Loader/>}
    {!Fetching && postlist.length==0&&(<Welcome/>)}
    {!Fetching && postlist.map((postlist)=>(<Post key={postlist.id} post={postlist}/>))}
    </>
  );
};

export default PostList;
