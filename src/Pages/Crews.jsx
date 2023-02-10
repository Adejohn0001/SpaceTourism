import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import douglas from '../assets/crew/image-douglas-hurley.webp';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import anousheh from '../assets/crew/image-anousheh-ansari.png';
import styled from 'styled-components';
import Nav from '../Components/Nav';

const StyledCrews = styled.div`
    background-image:  url(${require(`../assets/crew/background-crew-mobile.jpg`)});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    padding: 20px;
    background-position: center;
}

.flight {
    margin-top: 3rem;
    text-transform: uppercase;
    font-size: 25px;
    color: rgb(227, 227, 254);
    margin-bottom: 1rem;
}
.douglas {
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
}
.main-text {
    color: white;
    font-size: 13px;
}
.carousel-img {
    margin-top: 5rem;
    width: 50%;
    height: 80vh;
}
@media (min-width: 576px) {
    
        background-image: url(${require(`../assets/crew/background-crew-tablet.jpg`)});
        padding: 20px 0px 20px 20px;
        height: 200vh;
}

@media (min-width: 769px) {
        background-image: url(${require(`../assets/crew/background-crew-desktop.jpg`)});
        height: 100vh;
        background-size:cover;
}
`
const Crews = () => {
  return (
    <StyledCrews>
        <Nav />
      <Carousel fade controls={false}>
      <Carousel.Item className="flex">
      <div>
        <img
          className="carousel-img"
          src={douglas}
          alt="First slide"
        />
      </div>

      <div>
        <Carousel.Caption>
          <h3 className='h3'>Flight Engineer</h3>
          <p>Douglas Hurley</p>
          <p>
            Douglas Hurley is an Iranian American engineer and co-founder of Prodea 
            systems. Hurley was the fourth self-funded space tourist,the first self-funded 
            man to fly to the ISI, and the first Iranian in space.
          </p>
        </Carousel.Caption>
      </div>

      </Carousel.Item>


      <Carousel.Item className="flex">
      <div>
        <img
          className="carousel-img"
          src={anousheh}
          alt="First slide"
        />
      </div>

      <div>
        <Carousel.Caption>
          <h3 className='h3'>Flight Engineer</h3>
          <p>Anousheh Ansari</p>
          <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of 
            Prodea systems. Ansari was the fourth self-funded space tourist,
            the first self-funded woman to fly to the ISI, and the first 
            Iranian in space.
          </p>
        </Carousel.Caption>
      </div>
      </Carousel.Item>


      <Carousel.Item className="flex">
      <div>
        <img
          className="carousel-img"
          src={mark}
          alt="First slide"
        />
      </div>

      <div>
        <Carousel.Caption>
          <h3 className='h3'>Flight Engineer</h3>
          <p>Mark Shuttleworth</p>
          <p>
             Mark Shuttleworth is an Iranian American engineer and co-founder of 
            Prodea systems. Ansari was the fourth self-funded space tourist,
            the first self-funded man to fly to the ISI, and the first 
            Iranian in space.
          </p>
        </Carousel.Caption>
      </div>
      </Carousel.Item>
    </Carousel>
    </StyledCrews>
  )
}

export default Crews