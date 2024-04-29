import React, { useContext } from "react";
import Post from "./Post";
import { Postlist as Posts } from "../Context/Post_list_store";
import Welcome from "./Welcome";
const PostList = () => {
  const { postlist ,Intailpost} = useContext(Posts);
  const handleposts=()=>{

    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=>{Intailpost(data.posts)});
  }
  return (
    <>
    {postlist.length==0&&(<Welcome getpost={handleposts}/>)}
    {(postlist.map((postlist)=>(<Post key={postlist.tag} post={postlist}/>)))}
    </>
  );
};

export default PostList;
