import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer-container">
        <h4>Meet the Team!</h4>
        <div className="footer-links">
          <h4 className='footer-teams'>Front-End</h4>
          <a className='footer-names' href="https://www.linkedin.com/in/axel-witt-021b85200/">Axel Witt</a>
          <a className='footer-names' href="https://www.linkedin.com/in/devops-jasmine/">Jasmine Williams</a>
          <a className='footer-names' href="https://www.linkedin.com/in/gerardo-arriaza-pantaleon1/">Gerardo Arriaza Pantaleon</a>
          <h4 className='footer-teams'>Back-End</h4>
          <a className='footer-names' href="https://www.linkedin.com/in/guoxing-liu-912259226/">Guoxing Liu</a>
          <a className='footer-names' href="https://www.linkedin.com/in/felix-carela/">Felix Carela</a>
        </div>
    </div>
  )
}

export default Footer