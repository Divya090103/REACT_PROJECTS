import React, { useContext } from "react";
import Post from "./Post";
import { Postlist as Posts } from "../Context/Post_list_store";

const PostList = () => {
  const { postlist } = useContext(Posts);
  
  return (
    <>
    {(postlist.map((postlist)=>(<Post key={postlist.tag} post={postlist}/>)))}
    </>
  );
};

export default PostList;
