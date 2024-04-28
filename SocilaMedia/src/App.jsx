import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import Post from './Components/Post'
import PostList from './Components/PostList'
import Createpost from './Components/Createpost'
import Postlistprovider from './Context/Post_list_store'
function App() {
const [tab,settab]=useState("Home")
  return (
    <>
    <Postlistprovider>
    <div className='app-container'>   
    <Sidebar tab={tab} settab={settab}/> 
    <div className='content'>
     <Header/>
     {(tab==="Home")?(<PostList></PostList>):<Createpost/>}
        <Footer/>
      </div>
 </div>
 </Postlistprovider>
     </>
  )
}

export default App
