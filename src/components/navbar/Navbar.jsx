import React from 'react'
import "./Navbar.css"
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
   let {pathname} = useLocation()
   if(pathname.includes("/register") || pathname.includes("/admin")){
    return <></>
   }
  return (
    <div className='navbar'>
        <NavLink to={"/"}>
            <h2>Navbar</h2>
        </NavLink>
        <NavLink className='navbar__link' to={"/"}>Home</NavLink>
        <NavLink className='navbar__link' to={"/about"}>About</NavLink>
        <NavLink className='navbar__link' to={"/register"}>Login</NavLink>
    </div>
  )
}

export default Navbar