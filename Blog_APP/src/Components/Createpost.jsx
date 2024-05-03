import { useContext, useRef } from "react";
import { Postlist } from "../Context/Post_list_store";
const Createpost=()=>{
  const {add}=useContext(Postlist);
const id=useRef();
const posttitle=useRef();
const content=useRef();
const posttag=useRef();
const handlesubmit=()=>{
  const id=id.current.value;
  const title=posttitle.current.value
  const cnt=content.current.value
  const tags=posttag.current.value.split(/(\s+)/);
  // userid.current.value="";
  // posttitle.current.value="";
  // content.current.value="";

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userid:id,
      title:title,
      body:cnt,
      tags:tags,
      /* other post data */
    })
  })
  .then(res => res.json())
  .then(post=>{consolelog("server creste the post")
    add(post)});
}
return(

  <form className="frm" onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="Userid" className="form-label" >Userid</label>
    <input type="text" className="form-control" id="Userid" ref={id} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
  <label htmlFor="ttle" className="form-label">Title</label>
    <input type="text" className="form-control" id="ttle" ref={posttitle}aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
  <label htmlFor="contenet" className="form-label">Post Content</label>
  <input type="text" className="form-control"  style={{height:'20vh'}} id="contenet" ref={content} aria-describedby="emailHelp"/>
</div>
<div className="mb-3">
  <label htmlFor="Tags" className="form-label">tags</label>
  <input type="text" className="form-control" id="Tags" ref={posttag} aria-describedby="emailHelp"/>
</div>
  <button type="submit" className="btn btn-primary">Create post</button>
</form>
)
}
export default Createpost;