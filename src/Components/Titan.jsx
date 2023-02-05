import React from 'react'
import titan from '../assets/destination/image-titan.png'
import DestNav from './DestNav'
import Nav from "../Components/Nav";
import styled from 'styled-components';

const StyledTitan = styled.div`
background-image: url(${require(`../assets/destination/background-destination-mobile.jpg`)});
  background-repeat: no-repeat;
  background-size: cover;
  height: 170vh;
  padding: 20px;
  background-position: center;
span {
  color: aliceblue;
  font-size: 15px;
  font-weight: lighter;
  text-transform: uppercase;
  margin-left: 1rem;
}
.p1{
  color: rgb(118, 118, 123);
  padding: 3rem;
  margin: 0 auto;
  font-size: 15px;
}
.container02 {
  display: flex;
  flex-direction: column;
}
.container01 {
  margin-top:5rem;
}

@media (min-width: 576px) {
  background-image: url(${require(`../assets/destination/background-destination-tablet.jpg`)});
    padding: 20px 0px 20px 20px;
    height: 200vh;

    span {
      font-size: 20px
    }
    .p1 {
      font-size: 20px;
    }
  }

@media (min-width: 769px) {
  background-image: url(${require(`../assets/destination/background-destination-desktop.jpg`)});
    height: 93.3vh;
    background-size:cover;

.container02 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 50px 0px 200px;
}

.container03 {
    width: 42.5%;
}
};
`

const Titan = () => {
  return (
    <StyledTitan>
      <Nav />

      <div>
        <div className="container01">
          <p className="p1">
            01
            <span>Pick your destination</span>
          </p>
        </div>

        {/** container2 */}
        <div className="container02">
          <div className="mars-container">
            <img src={titan} alt="titan" srcset="" className="mars-image" />
          </div>

          <div className="container03">
            <div>
              <DestNav />
            </div>

            <div>
              <div>
                <p className="mars">Titan</p>
              </div>
              <div>
                <p className="dest-text">
                  Don't forget to pack your hiking boots. You'll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  soloar system. It's two and a half times the size of Everest.
                </p>
              </div>

              <div>
                <hr />
              </div>

              <div className="avg-amt">
                <div>
                  <p className="avg">Avg. Distance</p>
                  <p className="amt">225 Mil. km</p>
                </div>

                <div>
                  <p className="avg">Est. Travel Time</p>
                  <p className="amt">9 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledTitan>
  )
}

export default Titan