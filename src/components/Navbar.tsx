import React from 'react'
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <div className='navbar-container'>
        <nav className="navbar-container">
          <div className='navbar-button'><NavLink to="/mp/lighting">Lighting</NavLink></div>
          <div className='navbar-button'><NavLink to="/mp/furniture">Furniture</NavLink></div>
          <div className='navbar-button'><NavLink to="/mp/decor">Decor</NavLink></div>
          <div className='navbar-button'><NavLink to="/mp/linens">Linens</NavLink></div>
        </nav>
    </div>
    </div>
  )
}

export default Navbar