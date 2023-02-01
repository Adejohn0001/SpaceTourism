import React, { useState } from 'react'
import logo from '../assets/shared/logo.svg'
import {
  Link
} from 'react-router-dom'
import close from '../assets/shared/icon-close.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';

const Nav = () => {
  const [open,setOpen] = useState(false)

  const seeMenu = () => {
    setOpen(!open)
  }
  return (
    <div className='container1'>
        <div>
        <img src={logo} alt="logo" srcset="" />
        </div>

        {/** this is for the nav links */}
        <div className='links'>
          <div className='sublink1'></div>
          <nav className={open ? 'slider open': 'slider'}>
          <ul className='list1'>
            <div>
              <img src={close} alt="close" srcset="" className='close' onClick={seeMenu}/>
            </div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/destination">Destination</Link>
            </li>
            <li>
              <Link to="/crew">Crew</Link>
            </li>
            <li>
              <Link to='/technology'>Technology</Link>
            </li>
          </ul>
          </nav>
        </div>

        <div className='hamburger'>
           <img src={hamburger} alt="" srcset="" onClick={seeMenu}/>
        </div> 
    </div>
  )
}

export default Nav