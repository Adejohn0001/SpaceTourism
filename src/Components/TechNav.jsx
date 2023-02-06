import React from 'react'
import {
    NavLink
} from 'react-router-dom'
import styled from 'styled-components'

const StyledTechNav = styled.div`
.tech01{
    display:flex;
}
.nav-links-tech{
    font-size:32px;
    border: 1px solid white;
    padding: 0.9rem 1.5rem;
    border-radius: 100%;
    margin-top: 4rem;
}
.tech01 li {
    margin-top: 3rem;
}
.active {
    background-color: white;
    color:rgb(38, 38, 54);
    margin-top: 
}
.first {
    margin-bottom: 12rem;
}

@media (min-width: 576px) {
}

@media (min-width: 769px) {
    .tech01{
        display:flex;
        flex-direction: column;
    }
};
`

const TechNav = () => {
  return (
    <StyledTechNav>
        <ul className='tech01'>
            <li>
              <NavLink to="/technology"
               activeClassName="activetech"
               className="nav-links-tech"
               >
                1
              </NavLink>
            </li>
            
            <li>
              <NavLink 
              exact 
              activeClassName="active"
              className="nav-links-tech"
              to="/space-capsule"
              >
                2
              </NavLink>
            </li>

            <li>
              <NavLink 
              activeClassName="active"
              className="nav-links-tech"
              to="/spaceport"
              >
                3
              </NavLink>
            </li>
          </ul>
    </StyledTechNav>
  )
}

export default TechNav