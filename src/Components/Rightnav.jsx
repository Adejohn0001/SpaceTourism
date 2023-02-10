import React from 'react'
import {
    NavLink
  } from 'react-router-dom'
import styled from 'styled-components';

const Ul = styled.ul`
display: flex;
flex-direction: column;
width: 70.5%;
padding: 20px 150px 20px 100px;

.background-color {
    background-color: rgb(38, 38, 54);
    width:100%;
    height:10vh;
    opacity: 0.4;
    margin-top:-1rem;
    filter: blur(10px);
    
    padding:0rem 6.8rem 0rem 3rem;
}
li{
    margin-right: 2rem;
}
.nav-num {
    font-size: 11px;
    margin-right: 0.5rem;
    margin-left: 0rem;
  }
  .nav-link{
    font-size:11px;
  }
  ul{
    padding-left: 5rem; 
    position:relative;
    margin-top:-2.5rem;
    width: 60%;
  }

@media (max-width: 769px) {
    padding: 40px 40px 40px 40px;
    background-color: rgb(38, 38, 54);
    margin-top: -1.5rem;
    width: 79.3%;
    .background-color {
       display:none;
    }
    li{
        margin-right:0.5rem
    }
    .nav-num{
        display: none;
    }
    .nav-link{
        font-size:8px;
      }

      ul{
        padding-left: 0rem; 
        position:relative;
        margin-top:0rem;
        width: 60%;
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
    padding: 0rem 0rem;
    font-size: 30px;
    transition: transform 0.3s ease-in-out;
  }
  li {
    padding: 20px 0px;
    font-size: 70px;
    
  }
  .nav-link{
    font-size:15px;
  }
}
`


const Rightnav = ({ open }) => {
  return (
    <Ul open={open}>
        <div className='background-color'></div>
        <ul className='list1'>
            <li className='text-white'>
              <NavLink 
              exact
              to="/"
              activeClassName="active"
              className="nav-link"
              >
                <span className='nav-num'>
                    00
                </span>
                Home
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to="/destination"
              activeClassName="active"
              className="nav-link"
              >
                <span className='nav-num'>
                    01
                </span>
                Destination
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to="/crew"
              activeClassName="active"
              className="nav-link"
              >
                <span className='nav-num'>
                    02
                </span>
                Crew
              </NavLink>
            </li>

            <li className='text-white'>
              <NavLink to='/technology'
              activeClassName="active"
              className="nav-link"
              >
                <span className='nav-num'>
                    03
                </span>
                Technology
              </NavLink>
            </li>

          </ul>
    </Ul>
  )
}

export default Rightnav