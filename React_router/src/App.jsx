// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Contact from './components/Contact';
import About from './components/About';
import Error from './components/Error';
import Headerdata from './components/Headerdata';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><Header/> </>}> 
          <Route index element={<Headerdata/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="*" element={<Error/>}></Route>
            </Route>
                    </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
