
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
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
            <SearchForm key={characterInfo.id} characterInfo={characterInfo} />
          </div>
      </section>
    </div>
  );
}


