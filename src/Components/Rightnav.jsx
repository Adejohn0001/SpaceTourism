import React from 'react'
import {
    NavLink
  } from 'react-router-dom'
import styled from 'styled-components';

const Ul = styled.ul`
display: flex;
background-color: rgb(38, 38, 54);
width: 50.5%;
padding: 20px 250px 20px 150px;

li{
    margin-right: 2rem;
}

@media (max-width: 769px) {
    padding: 40px 40px 40px 40px;
    margin-top: -1.5rem;
    width: 79.5%;
    
    li{
        margin-right:0.5rem
    }
}

@media (max-width: 575px) {
    background-color:transparent;
    width: 20%;
  ul {
    flex-flow: column nowrap;
    background-color:  rgb(0, 0, 15);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width:100%;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out;
  }
  li {
    padding: 20px 0px;
  }
}
`


const Rightnav = ({ open }) => {
  return (
    <Ul open={open}>
        <ul className='list1'>
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
    </Ul>
  )
}

export default Rightnav