const Welcome=({getpost})=>{
return(
  <center>
    <h1 className="mt-5">There are no Posts</h1>
    <button className="btn btn-primary" onClick={getpost}>Get Posts From Server</button>
  </center>
)
}
export default  Welcome;