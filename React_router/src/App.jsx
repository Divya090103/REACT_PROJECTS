import React from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
function App() {


  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Header/>}/>
  <Route path='/about' element={<h1>My about page</h1>} />
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
