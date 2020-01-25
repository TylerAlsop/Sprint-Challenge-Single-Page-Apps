import React from 'react';
import CharacterCard from "./CharacterCard"

import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Character(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState();
  console.log(props);

  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const id = props.match.params.id
    console.log("id: ", id);


    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(
        res => {
        console.log("Success:", res);}
      )
      .catch(err => console.log("Error", err.response))

  }, [props.match.params.id]);

  if (!character) {
    return <div>Loading character information...</div>;
  }

  const { id, name, status, species, type } = character;

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <CharacterCard />
      
    </section>
  );
}
