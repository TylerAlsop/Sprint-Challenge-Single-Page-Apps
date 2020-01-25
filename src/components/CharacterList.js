
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    const getCharacterInfo = () => {
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(
        res => {
          setCharacterInfo(res.data)
          console.log("Succesfully recieved data", res)
        }
      )
      .catch(
        error => {
          console.error('Server Error', error);
        }
      )
    };
    getCharacterInfo();

  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <div className="character-list">
      {characterInfo.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </div>
    </section>
  );
}

function CharacterDetails({ character }) {
  const { name, status, species, type } = character;
  return (
    <div className="character-card">
        <h2>{name}</h2>
        <div className="character-status">
          Status: <em>{status}</em>
        </div>
        <div className="character-species">
          Species: <strong>{species}</strong>
        </div>
        <div className="character-type">
          Type: <strong>{type}</strong>
        </div>
    </div>
  );
}