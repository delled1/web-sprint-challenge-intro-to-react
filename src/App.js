import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import Character from "./components/Character"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, getCharacter] = useState([])

  useEffect(() => {

    axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      console.log(response.data)
      getCharacter(response.data.results)
      
    })
    .catch((error) =>
    console.log(error))
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map((character, index) => {
        return <Character char={character} key={index}/>
      })}
    </div>
  );
}

export default App;
