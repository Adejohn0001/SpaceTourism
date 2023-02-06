import React from 'react'
import styled from 'styled-components'


const StyledMembers = styled.div`
display:flex;
margin-top: 15rem;

`
const CrewMembers = ( { text, crewname, shortsory, picture}) => {
  return (
    <StyledMembers>
         <div>
            <p className=""> { text } </p>
            <p> { crewname } </p>
            <p> { shortsory } </p>
        </div>
        <div>
            <img src={ picture } alt="crew" />
        </div>
    </StyledMembers>
  )
}

export default CrewMembers