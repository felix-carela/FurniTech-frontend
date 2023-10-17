import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className='header-container'>
      <div className='header-signin'>
        <NavLink to="/signin">Signin</NavLink>
      </div>
      <div className='header-message'>
        <h1>This is the Header Component!</h1>
      </div>
      <div className='header-logo'>
        <h1><NavLink to="/">Home</NavLink></h1>
      </div>
    </div>
  )
}

export default Header