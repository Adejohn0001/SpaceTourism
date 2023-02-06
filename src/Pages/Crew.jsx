import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import douglas from '../assets/crew/image-douglas-hurley.webp';
import "../Styles/Crew.css";
import Nav from "../Components/Nav";
import CrewMembers from "../Components/CrewMembers";
import styled from "styled-components";
import mark from '../assets/crew/image-mark-shuttleworth.png';

const StyledCarousel = styled.div`
width: 100%;
height: 100vh;
background-color: red;

.main-slider{
    width:100%;
    padding:0;
}
`
const Crew = () => {
    return (
        <div className="crew" showArrows={false}>
            <div>
                <Nav/>
            </div>

            <StyledCarousel>
            <Carousel className="main-slider">
                <CrewMembers text={" Flight Engineer  "}
                    crewname={" Douglas Hurley "}
                    shortsory={" Douglas Hurley is an Iranian American engineer and co-founder of Prodea systems. Hurley was the fourth self-funded space tourist, the first self-funded man to fly to the ISI, and the first Iranian in space.  "}
                    picture = { douglas }
                    />

               <CrewMembers text={" Flight Engineer  "}
                    crewname={" Mark Shuttleworth "}
                    shortsory={" Mark Shuttleworth is an Iranian American engineer and co-founder of Prodea systems. Shuttleworth was the fourth self-funded space tourist, the first self-funded man to fly to the ISI, and the first Iranian in space. "}
                    picture = { mark }
                    />
            </Carousel>
            </StyledCarousel>
        </div>
    );
};

export default Crew;
