// Write your Character component here
//ICE

import React, {useState} from 'react'
import styled from 'styled-components'
import CharInfo from "./Info"

const StyleDiv = styled.div`

    background: black;
    height: 25 vh;
    margin: 0 auto;
    width: 50vw;

`

const StyleH2 = styled.h2`

    font-size: 3rem;
    text-shadow: 2px 2px 2px grey;
    color: yellow
`


function Character ({char})  {

    return(
        <StyleDiv>
            <StyleH2>{char.name}</StyleH2>
            <CharInfo char={char}/>
        </StyleDiv>
    )


}

export default Character