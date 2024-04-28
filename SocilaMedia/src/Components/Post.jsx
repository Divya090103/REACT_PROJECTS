import { useContext, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { Postlist } from "../Context/Post_list_store";
const Post=({post})=>{
  const{deltepost}=useContext(Postlist)
  const [like,setlike]=useState(post.reaction);
  const [Dislike,setdislike]=useState(post.disreaction)
  const incre=()=>{
    let v=like;
    setlike(v+1);
  }

  const disincre=()=>{
    let v=Dislike;
    setdislike(v+1);
  }
return(
  <div className="row g-0 border rounded overflow-hidden mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">{post.userid}</strong>
          <h3 className="mb-0">{post.title}</h3>
          <div className="mb-1 text-primary">{(post.tags).map((tags)=>(tags ))}</div>
          <p className="card-text mb-auto">{post.body}</p>
          <div className="flex-md-row ">
           <span><button className="btn btn-primary me-2" onClick={incre}><AiFillLike/> {like}</button></span>
            <span><button className="btn btn-danger" onClick={disincre}><BiSolidDislike/> {Dislike}</button></span>
            <span><button className="btn btn-success ms-2" onClick={()=>deltepost(post.id)}><RiDeleteBin4Fill/></button></span>
            </div>
     
        </div>
      
      </div>
)
}
export default Post;