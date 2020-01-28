
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

  function SearchForm() {
    const [search, setSearch] = useState("");
    const [filteredCharacters, setFilteredCharacters] = useState([]);
  
    useEffect(() => {
      const filtered = characterInfo.filter(characterName => characterName.includes(search));
      setFilteredCharacters(filtered);
    }, [search]);
  
    const handleChange = e => {
      e.preventDefault();
      setSearch(e.target.value);
    };
  
   
    return (
      <div className="search-form">
        <h1>Search Characters Here:</h1>
        <input
          type="text"
          placeholder="Search Character Name Here"
          onChange={handleChange}
          value={search}
        />
        {filteredCharacters.map(characaterName => (
          <div key={characaterName}>
            {characterName}
          </div>
        ))}
  
      </div>
    );
  }

  

  return (
    <div>
      <section className="search-bar">
        {SearchForm}
        {/* <SearchForm /> */}
      </section>
      <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <div className="character-list">
      {characterInfo.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
    </section>
    </div>
    
  );
}



