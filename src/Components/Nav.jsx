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
        
        <div>
          <Burger />
        </div>
    </div>
  )
}

export default Nav