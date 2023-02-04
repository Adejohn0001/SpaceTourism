import React from 'react'
import styled from 'styled-components'
import Hero from '../Components/Hero'
import Nav from '../Components/Nav'

const StyledHome = styled.div`
background-image: url(${require(`../assets/home/background-home-mobile.jpg`)});
  background-repeat: no-repeat;
  background-size: cover;
  height: 120vh;
  padding: 20px;

@media (min-width: 576px) {
  background-image: url(${require(`../assets/home/background-home-tablet.jpg`)});
      padding: 20px 0px 20px 20px;
}

@media (min-width: 769px) {
  background-image: url(${require(`../assets/home/background-home-desktop.jpg`)});
      height: 93.3vh;
      background-size:auto;
}
`

const Home = () => {
  return (
    <StyledHome>
      <Nav />
      <Hero />
    </StyledHome>
  )
}

export default Home