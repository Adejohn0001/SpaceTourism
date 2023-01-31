import React from 'react'
import {
    Link
} from 'react-router-dom'

const DestNav = () => {
  return (
    <div>
        <div className='links01'>
          <div className='sublink01'></div>
          <ul className='unordered1'>
            <li>
              <Link to="/moon">Moon</Link>
            </li>
            <li>
              <Link to="/destination">Mars</Link>
            </li>
            <li>
              <Link to="/europa">Europa</Link>
            </li>
            <li>
              <Link to='/titan'>Titan</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default DestNav