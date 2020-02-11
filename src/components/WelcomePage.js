import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import CharacterList from "./CharacterList"


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <section>
        <h2 className="welcome-message">Welcome to the ultimate fan site!</h2>
        <div className="main-img-and-search-link">
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <div className="lead">
            <Button color="success">
              <Link className="search-characters-button" to="/search/" color="black">Search List Of Characters</Link>
            </Button>
          </div>
        </div>
      </section>
      <section>
        <CharacterList />
      </section>
    </section>
  );
}