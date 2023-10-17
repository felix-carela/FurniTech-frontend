import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
        <NavLink to="/signin">Signin</NavLink>
        <h1>This is the Header Component!</h1>
    </div>
  )
}

export default Header