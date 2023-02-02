import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import douglas from '../assets/crew/image-douglas-hurley.webp';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import anousheh from '../assets/crew/image-anousheh-ansari.png';
import victor from '../assets/crew/image-victor-glover.png';
import '../Styles/Crew.css';
import Nav from '../Components/Nav';

const Crew = () => {
  return (
    <div className='crew'>
        <div>
           <Nav />
        </div>
         <Carousel className='main-slider'>
                <div className='ansari'>
                    <div>
                         <p className="flight">Flight Engineer </p>
                         <p className='douglas'>Douglas Hurley</p>
                         <p className='main-text'>Douglas Hurley is an Iranian American engineer and co-founder of 
                          Prodea systems. Hurley was the fourth self-funded space tourist,
                          the first self-funded man to fly to the ISI, and the first 
                          Iranian in space. </p>
                    </div>

                    <div>
                       <img src={douglas} alt="crew" className='crew-img'/>
                    </div>
                </div>

                <div className='ansari'>
                    <div>
                         <p className="">Flight Engineer </p>
                         <p>Mark Shuttleworth</p>
                         <p>Mark Shuttleworth is an Iranian American engineer and co-founder of 
                          Prodea systems. Shuttleworth was the fourth self-funded space tourist,
                          the first self-funded man to fly to the ISI, and the first 
                          Iranian in space. </p>
                    </div>

                    <div>
                    <img src={mark} alt="crew" className='crew-img' />
                    </div>
                </div>


                <div className='ansari'>
                    <div className='text'>
                         <p className="flight2">Flight Engineer </p>
                         <p>Anousheh Ansari</p>
                         <p>Anousheh Ansari is an Iranian American engineer and co-founder of 
                          Prodea systems. Ansari was the fourth self-funded space tourist,
                          the first self-funded woman to fly to the ISI, and the first 
                          Iranian in space. </p>
                    </div>
                    <div>
                       <img src={anousheh} alt="crew" className='crew-img' />
                    </div>
                </div>

                <div className='ansari'>
                    <div>
                         <p className="">Flight Engineer </p>
                         <p>Anousheh Ansari</p>
                         <p>Anousheh Ansari is an Iranian American engineer and co-founder of 
                          Prodea systems. Ansari was the fourth self-funded space tourist,
                          the first self-funded woman to fly to the ISI, and the first 
                          Iranian in space. </p>
                    </div>
                    <div>
                       <img src={victor} alt="crew" />
                    </div>
                </div>
            </Carousel>
    </div>
  )
}

export default Crew