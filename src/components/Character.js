import React from 'react';

import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterInfo, setCharacterInfo] = useState([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const id = 


    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(
        res => {
        console.log("Success:", res);}
      )
      .catch(err => console.log("Error", err.response))

  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      
    </section>
  );
}
