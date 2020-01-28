import React from "react";
import { Link } from "react-router-dom";


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <div className="main-img-and-search-link">
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <div className="search-characters-button-div">
            <Link className="search-characters-button" to="/character/">Search List Of Characters</Link>
          </div>

        </div>
        
      </header>
    </section>
  );
}