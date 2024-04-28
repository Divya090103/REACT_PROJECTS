import { useState } from "react";

const Post=({post})=>{
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
           <span><button className="btn btn-primary me-2" onClick={incre}>Like {like}</button></span>
            <span><button className="btn btn-danger" onClick={disincre}>Dislike {Dislike}</button></span>
            </div>

        </div>
      
      </div>
)
}
export default Post;