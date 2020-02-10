
import React, { useEffect, useState } from "react";
import axios from "axios";
// import SearchForm from "./SearchForm";
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

  ////////////////////////Search Form Function///////////////////

  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const filtered = characterInfo.filter(characterName => characterName.name.includes(search));
    setFilteredCharacters(filtered);
  }, [search]);

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  

  return (
    <div>
      <section className="search-bar">
          <div className="search-form">
          <h1>Search Characters Here:</h1>
          <input
            className="search-input-field"
            type="text"
            placeholder="Search Character Name Here"
            onChange={handleChange}
            value={search}
          />
          <p>*Search Is Case Sensitive</p>

        </div>
      </section>
      <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <div className="character-list">
      {filteredCharacters.map(characterName => (
        <CharacterCard key={characterName.id} character={characterName} />
      ))}
    </div>
    </section>
    </div>
  );
}


