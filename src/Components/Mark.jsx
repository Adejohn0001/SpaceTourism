import React from 'react'
import mark from '../assets/crew/image-mark-shuttleworth.png';

const Mark = () => {
  return (
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
  )
}

export default Mark