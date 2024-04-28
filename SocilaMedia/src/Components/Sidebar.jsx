export default function Sidebar({tab,settab}){
  return(
    <div className="side d-flex flex-column flex-shrink-0 p-1 text-bg-dark" style={{width: "280px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span className="fs-4">VLOGGERS</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#"  onClick={()=>{settab('Home')}} className={`nav-link text-white ${tab==='Home'&&'active'}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" onClick={()=>{settab('CreatePost')}}  className={`nav-link text-white ${tab==='CreatePost'&&'active'}`}>
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
        Create Post
        </a>
      </li>
      </ul>
     </div>
  )
}