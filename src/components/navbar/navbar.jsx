import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

import './navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const clickHandler = () => setOpen(!open)
  const close = () => setOpen(false)

  return (
    <div className='nav-container'>
      <div className="nav-content">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <ul className={open ? 'nav-menu active' : 'nav-menu'}>
         <li><a href="#" onClick={close}>Pricing</a></li>
         <li><a href="#" onClick={close}>Product</a></li>
         <li><a href="#" onClick={close}>About Us</a></li>
         <li><a href="#" onClick={close}>Careers</a></li>
         <li><a href="#" onClick={close}>Community</a></li>
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