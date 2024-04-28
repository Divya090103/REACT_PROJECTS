import React, { useContext } from "react";
import Post from "./Post";
import { Postlist as Posts } from "../Context/Post_list_store";

const PostList = () => {
  const { postlist } = useContext(Posts);
  console.log(postlist);
  
  return (
    <>
    {(postlist.map((postlist)=>(<Post key={postlist.id} post={postlist}/>)))}
    </>
  );
};

export default PostList;
