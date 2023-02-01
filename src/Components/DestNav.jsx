import React from 'react'
import {
    NavLink
} from 'react-router-dom'

const DestNav = () => {
  return (
    <div>
        <div className='links01'>
          <div className='sublink01'></div>
          <ul className='unordered1'>
            <li>
              <NavLink to="/moon"
               activeClassName="active"
               className="nav-link"
               >
                Moon
              </NavLink>
            </li>
            
            <li>
              <NavLink 
              exact 
              activeClassName="active"
              className="nav-link"
              to="/destination"
              >
                Mars
              </NavLink>
            </li>

            <li>
              <NavLink 
              activeClassName="active"
              className="nav-link"
              to="/europa"
              >
                Europa
              </NavLink>
            </li>

            <li>
              <NavLink
              activeClassName="active"
              className="nav-link"
              to='/titan'
              >
                Titan
              </NavLink>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default DestNav