import React from 'react'
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg'

const Nav = () => {
  return (
    <div className='container1'>
        <div>
        <img src={logo} alt="logo" srcset="" />
        </div>

        {/** this is for the nav links */}
        <div className='links'>
          <div className='sublink1'></div>
          <ul>
            <li><a href='home'>Home</a></li>
            <li><a href="destination">Destination</a></li>
            <li><a href="crew">Crew</a></li>
            <li><a href='tech'>Technology</a></li>
          </ul>
        </div>

        <div className='hamburger'>
            <img src={hamburger} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Nav