import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo'>
        <h3>Welcome,userName</h3>
      </div>
      <div className='header-message'>
        <h1><NavLink to="/">FurniTech</NavLink></h1>
      </div>
      <div className='header-signin'>
        <h3><NavLink to="/signin">Signin</NavLink></h3>
      </div>
    </div>
  )
}

export default Header