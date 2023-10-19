import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className='header-container'>
      <div className='header-logo'>
      </div>
      <div className='header-message'>
        <h1><NavLink to="/">FurniTech</NavLink></h1>
      </div>
      <div className='header-signin'>
      <h3><NavLink to="/signin"><svg className="header-signin-svg" fill="#ffffff" width="162px" height="162px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.288"></g><g id="SVGRepo_iconCarrier"><path d="M12,11A5,5,0,1,0,7,6,5.006,5.006,0,0,0,12,11Zm0-8A3,3,0,1,1,9,6,3,3,0,0,1,12,3ZM4,23H20a1,1,0,0,0,1-1V18a5.006,5.006,0,0,0-5-5H8a5.006,5.006,0,0,0-5,5v4A1,1,0,0,0,4,23Zm1-5a3,3,0,0,1,3-3h8a3,3,0,0,1,3,3v3H5Z"></path></g></svg></NavLink></h3>
          <h3><svg className='header-cart-svg'viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 7H6.92013C6.40004 7 5.96678 7.39866 5.92359 7.91695L5.09025 17.917C5.04167 18.5 5.50176 19 6.0868 19H17.9132C18.4982 19 18.9583 18.5 18.9097 17.917L18.0764 7.91695C18.0332 7.39866 17.6 7 17.0799 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round"></path> </g></svg></h3>
      </div>
    </div>
  )
}

export default Header