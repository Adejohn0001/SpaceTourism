import React from 'react'
import styled from 'styled-components'
import Nav from '../Components/Nav'
import TechNav from '../Components/TechNav'
import launch from '../assets/technology/image-launch-vehicle-portrait.jpg';
import launchM from '../assets/technology/image-launch-vehicle-landscape.jpg';

const StyledTech = styled.div`
background-image: url(${require(`../assets/technology/background-technology-mobile.jpg`)});
  background-repeat: no-repeat;
  background-size: cover;
  height: 155vh;
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
.container01{
    margin-top:5rem;
    padding-left: 0rem;
}
.tech-container1 {
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 1rem;
}
.tech-subcontainer1 {
    display:flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 4rem;
}
.launch-img{
    height: 50vh;
    display: none;
}
.launch-imgM{
    width: 100%;
    height: 50vh;
}
.tech-text1{
    font-size: 12px;
    color: rgb(194, 203, 233);
    text-transform: uppercase;
}

.tech-text2{
    font-size: 42px;
    color: white;
    text-transform: uppercase;
    margin: 0.5rem 0rem;
}

.tech-text3{
    font-size: 15px;
    color: rgb(194, 203, 233);
    width:100%;
    line-height: 25px;
}



@media (min-width: 576px) {
    background-image: url(${require(`../assets/technology/background-technology-tablet.jpg`)});
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
    background-image: url(${require(`../assets/technology/background-technology-desktop.jpg`)});
      height: 93.3vh;
      background-size:cover;

      .container01{
        margin-top:5rem;
        padding-left: 3.5rem;
    }
  .container02 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0px 50px 0px 200px;
  }

  .container03 {
      width: 42.5%;
  }

  .tech-container1 {
    display:flex;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 6rem;
}
.tech-subcontainer1 {
    display:flex;
    flex-direction: column;
    margin-left: 9rem;
    margin-top: 3rem;
}
.launch-img{
    height: 50vh;
    display: block;
}
.launch-imgM{
    display:none;
}
.tech-text1,
.tech-text01{
    font-size: 12px;
    color: rgb(194, 203, 233);
    text-transform: uppercase;
}

.tech-text2{
    font-size: 42px;
    color: white;
    text-transform: uppercase;
    margin: 0.5rem 0rem;
}

.tech-text3{
    font-size: 15px;
    color: rgb(194, 203, 233);
    width:60%;
    line-height: 25px;
}
.tech-text01{
    display:none;
}
};
@media (max-width: 575px) {
    .tech-container1 :nth-child(3) {
        order: 2;
    }
    .tech-container1 :nth-child(2) {
        order: 3;
    }
    .launch-imgM{
        margin-top: 5rem;
    }
    .tech-subcontainer1 {
        flex-direction: column-reverse;
    }
    .tech-text1 {
        display:none;
    }
    .tech-text01{
        font-size: 12px;
        color: rgb(194, 203, 233);
        text-transform: uppercase;
    }
}
`

const Technology = () => {
  return (
    <StyledTech>
        <div>
            <Nav />
        </div>
        <div className="container01">
          <p className="p1">
            03
            <span>Space Launch 101</span>
          </p>
        </div>

        <div className='tech-container1'>
            <div>
              <TechNav />
            </div>

            <div className='tech-subcontainer1'>
                <div>
                    <p className='tech-text1'> the terminology ... </p>
                </div>

                <div>
                    <p className='tech-text01'> the terminology ... </p>
                    <p className='tech-text2'> Launch vehicle </p>
                </div>

                <div>
                    <p className='tech-text3'>
                        A launch vehicle or carrier rocket is a rocket-propelled
                        vehicle used to carry a payload from Earth's surface to 
                        space, usually to Earth orbit or beyond. Our WEB-X carrier
                        rocket is the most powerful rocket in operation. Standing 
                        150 mitres tall. Its quite an awe-inspiring sight on the
                        launch pad!
                    </p>
                </div>
            </div>
            <div>
                    <img src={launch} alt="launch" srcset="" className='launch-img' />
                    <img src={launchM} alt="launch" srcset="" className='launch-imgM' />

            </div>
        </div>
    </StyledTech>
  )
}

export default Technology