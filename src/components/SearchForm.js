import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard"

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect((props) => {
    const filtered = props.filter(characterName => characterName.name.includes(search));
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
            className="search-input-field"
            type="text"
            placeholder="Search Character Name Here"
            onChange={handleChange}
            value={search}
          />
          <p>*Search Is Case Sensitive</p>
      <div className="character-list">
        {filteredCharacters.map(characterName => (
          <CharacterCard key={characterName.id} character={characterName} />
        ))}
    </div>


    </div>
  );
}







