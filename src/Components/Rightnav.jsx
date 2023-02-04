import React from 'react'
import {
    NavLink
  } from 'react-router-dom'
import styled from 'styled-components';

const Ul = styled.ul`
display: flex;
flex-direction: column;
width: 67.5%;
padding: 20px 150px 20px 100px;

.background-color {
    background-color: rgb(38, 38, 54);
    width:100%;
    height:10vh;
    margin-top:-2.3rem;
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
    position:relative;
  }

@media (max-width: 769px) {
    padding: 40px 40px 40px 40px;
    background-color: rgb(38, 38, 54);
    margin-top: -1.5rem;
    width: 79.5%;
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
                <span className='nav-num'>
                    00
                </span>
                Home
              </NavLink>
            </li>

            <li>
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

            <li>
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

            <li>
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
          <div className='background-color'></div>
    </Ul>
  )
}

export default Rightnav