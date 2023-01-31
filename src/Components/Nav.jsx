import React from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'
import {
  Link
} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='container1'>
        <div>
        <img src={logo} alt="logo" srcset="" />
        </div>

        {/** this is for the nav links */}
        <div className='links'>
          <div className='sublink1'></div>
          <ul className='list1'>
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
        </div>

        <div className='hamburger'>
            <img src={hamburger} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Nav