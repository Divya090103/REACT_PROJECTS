import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router";
const Header=()=>{
  return(
    <>
     <Nav/>
 <Outlet/>
  </>
  );
}
export default Header;