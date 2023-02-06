import React from 'react'
import victor from '../assets/crew/image-victor-glover.png';

const Victor = () => {
  return (
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
  )
}

export default Victor