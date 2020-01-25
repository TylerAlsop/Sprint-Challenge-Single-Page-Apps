import React, { useState } from "react";

export default function SearchForm() {
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
    <section className="search-form">
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

    </section>
  );
}







