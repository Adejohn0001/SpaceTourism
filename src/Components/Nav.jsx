import React from 'react'
import logo from '../assets/shared/logo.svg'
import {
  NavLink
} from 'react-router-dom'
import close from '../assets/shared/icon-close.svg';
import hamburger from '../assets/shared/icon-hamburger.svg';

const Nav = () => {
  return (
    <div className='container1'>
        <div>
        <img src={logo} alt="logo" srcset="" />
        </div>

        {/** this is for the nav links */}
        <div className='links'>
          <div className='sublink1'></div>
          <nav className="">
          <ul className='list1'>
            <div>
              <img src={close} alt="close" srcset="" className='close'/>
            </div>
            <li>
              <NavLink 
              exact
              to="/"
              activeClassName="active"
              className="nav-link"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/destination"
              activeClassName="active"
              className="nav-link"
              >
                Destination
              </NavLink>
            </li>

            <li>
              <NavLink to="/crew"
              activeClassName="active"
              className="nav-link"
              >
                Crew
              </NavLink>
            </li>

            <li>
              <NavLink to='/technology'
              activeClassName="active"
              className="nav-link"
              >
                Technology
              </NavLink>
            </li>

          </ul>

          </nav>
        </div>

        <div className='hamburger'>
           <img src={hamburger} alt="" srcset=""/>
        </div> 
    </div>
  )
}

export default Nav