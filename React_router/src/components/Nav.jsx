import React from "react";
import { NavLink } from "react-router-dom";
const Nav=()=>{
  return(
    <header>
    <h1>Navbar</h1>
    <ul>
    <li><NavLink to='/'>home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
   </header>
  )
}
export default Nav;