import { useContext, useRef } from "react";
import { Postlist } from "../Context/Post_list_store";
const Createpost=()=>{
  const {add}=useContext(Postlist);
const userid=useRef();
const posttitle=useRef();
const content=useRef();
const posttag=useRef();
const handlesubmit=()=>{
  const id=userid.current.value;
  const title=posttitle.current.value
  const cnt=content.current.value
  const tags=posttag.current.value.split(/(\s+)/);
  userid.current.value="";
  posttitle.current.value="";
  content.current.value="";

  add(id,title,cnt,tags,0,0)


}
return(

  <form className="frm" onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="Userid" className="form-label" >Userid</label>
    <input type="text" className="form-control" id="Userid" ref={userid} aria-describedby="emailHelp"/>
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