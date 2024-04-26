import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import Usercontextprovider from './Context/Usercontextprovider'
function App() {


  return (
    <Usercontextprovider>
    <Login/>
   <h1>Handle Context API</h1>
   <Profile/>
    </Usercontextprovider>
  )
}

export default App
