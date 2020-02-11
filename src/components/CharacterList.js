
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import CharacterCard from "./CharacterCard";



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
          setCharacterInfo(res.data.results)
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
    <div>
      <section className="character-list">

        <div className="search-characters-button-container">
          <Button className="search-characters-button" color="success">
            <Link className="search-characters-button-link" to="/characters/search/" color="black">Search List Of Characters</Link>
          </Button>
        </div>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
        <div className="character-list">
          {characterInfo.map(characterName => (
            <CharacterCard key={characterName.id} character={characterName} />
          ))}
      </div>
    </section>
    </div>
  );
}


