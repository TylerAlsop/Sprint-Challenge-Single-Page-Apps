import React from "react";
import { Route, Link } from "react-router-dom";

import CharacterList from "./CharacterList";
// import SearchForm from "./SearchForm";


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />

        <Link className="search-characters-button" to="/character/">Search List Of Characters</Link>

        
        {/* <SearchForm /> */}
        {/* <CharacterList /> */}
      </header>
    </section>
  );
}