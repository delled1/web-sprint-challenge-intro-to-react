import React from 'react'
import styled from 'styled-components'


const StyledP = styled.p`

    color: yellow;

`

function CharInfo ({char}) {

    return (
        <StyledP>
        Birth Year: {char.birth_year}
        <br></br>
        Gender: {char.gender}
        <br></br>
        Height: {char.height}
        <br></br>
        Mass: {char.mass}
        <br></br>
        Eye Color: {char.eye_color}
        <br></br>
        Hair Color: {char.hair_color}
        <br></br>
        Skin Color: {char.skin_color}
        </StyledP>
    )
}

export default CharInfo