import { useContext, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { Postlist } from "../Context/Post_list_store";
const Post=({post})=>{
  const{deltepost}=useContext(Postlist)


return(
  <div className="row g-0 border rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">{post.userid}</strong>
          <h3 className="mb-0">{post.title} date 
         
          </h3>
          <div className="mb-1 text-primary">{(post.tags).map((tags)=>(`#${tags} ` ))}</div>
          <p className="card-text mb-auto">{post.body}</p>
            <div className="flex-md-row ">
            <div class="p-3 mt-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
The post has {post.reactions} reactions!

            <span><button className="btn btn-success ms-2" onClick={()=>deltepost(post.id)}>Delete post</button></span>
            </div>
            </div>
        </div>
      </div>
)
}
export default Post;