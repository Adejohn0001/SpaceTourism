import React from 'react'
import styled from 'styled-components'
import logo from '../assets/shared/logo.svg'
import Burger from './Burger'

const StyledLogo = styled.div`
margin-top: 0.5rem;
`
const Nav = () => {
  return (
    <div className='container1'>
        <StyledLogo>
        <img src={logo} alt="logo" srcset=""  />
        </StyledLogo>


        {/** this is for the nav links 
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
        </div> */}

        <div>
          <Burger />
        </div>
    </div>
  )
}

export default Nav