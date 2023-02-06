import React from 'react'
import douglas from '../assets/crew/image-douglas-hurley.webp';

const Douglas = () => {
  return (
    <div className='ansari'>
         <div>
            <p className="flight">Flight Engineer </p>
            <p className='douglas'>Douglas Hurley</p>
            <p className='main-text'>Douglas Hurley is an Iranian American engineer and co-founder of 
                Prodea systems. Hurley was the fourth self-funded space tourist,
                the first self-funded man to fly to the ISI, and the first 
                Iranian in space. 
            </p>
         </div>

         <div>
            <img src={douglas} alt="crew" className='crew-img'/>
         </div>
    </div>
  )
}

export default Douglas