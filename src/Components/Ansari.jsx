import React from 'react'
import anousheh from '../assets/crew/image-anousheh-ansari.png';

const Ansari = () => {
  return (
    <div className='ansari'>
        <div className='text'>
           <p className="flight2">Flight Engineer </p>
           <p>Anousheh Ansari</p>
           <p>Anousheh Ansari is an Iranian American engineer and co-founder of 
               Prodea systems. Ansari was the fourth self-funded space tourist,
               the first self-funded woman to fly to the ISI, and the first 
               Iranian in space. 
           </p>
        </div>
        <div>
            <img src={anousheh} alt="crew" className='crew-img' />
        </div>
    </div>
  )
}

export default Ansari