// Write your Character component here
//ICE

import React, { useState, useEffect} from 'react'

function Character ({char, index})  {

    return(
        <div>
            <h2>{char.name}</h2>
            <p>
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
            </p>
        </div>
    )


}

export default Character