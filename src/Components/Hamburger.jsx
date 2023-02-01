import React, { useState } from 'react'
import hamburger from '../assets/shared/icon-hamburger.svg'

const Hamburger = () => {
    const [burger, setBurger] = useState("hamburger unclicked")
    const [menu, setMenu] = useState("menu hidden")
    const [isMenu, setIsMenu] = useState("false")

    const updateMenu = () => {
        if (!isMenu) {
            setBurger ("hamburger clicked")
            setMenu ("menu visible")
        }
        else {
            setBurger ("hamburger unclicked")
            setMenu ("menu hidden")
        }
        setIsMenu(!isMenu)
    }
  return (
    <div>
        <div onClick={updateMenu}>
           <img src={hamburger} alt="" srcset="" className={burger}/>
        </div> 

        <div className={menu}></div>
    </div>

  )
}

export default Hamburger