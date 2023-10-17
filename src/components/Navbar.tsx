import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar-container">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/mp/lighting">Lighting</NavLink>
      <NavLink to="/mp/furniture">Furniture</NavLink>
      <NavLink to="/mp/decor">Decor</NavLink>
      <NavLink to="/mp/linens">Linens</NavLink>
    </nav>
    </div>
  )
}

export default Navbar