import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

import './navbar.css'
import { click } from '@testing-library/user-event/dist/click'

function Navbar() {
  const [open, setOpen] = useState(false)
  const clickHandler = () => setOpen(!open)

  return (
    <div className='nav-container'>
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className={open ? 'nav-menu active' : 'nav-menu'}>
         <li><a href="#">Pricing</a></li>
         <li><a href="#">Product</a></li>
         <li><a href="#">About Us</a></li>
         <li><a href="#">Careers</a></li>
         <li><a href="#">Community</a></li>
        </ul>

        <button>Get Started</button>

        <div className="hamburger" onClick={clickHandler}>
          {open ? <FaTimes /> : <GiHamburgerMenu />}
        </div>
      </div>
    </div>
  )
}

export default Navbar