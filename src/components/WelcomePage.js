import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from 'reactstrap';


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Jumbotron>
        <h1 className="lead">Welcome to the ultimate fan site!</h1>
        <div className="main-img-and-search-link">
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
          <div className="lead">
            <Button color="primary">
              <Link className="search-characters-button" to="/character/">Search List Of Characters</Link>
            </Button>
            
          </div>

        </div>
        
      </Jumbotron>
    </section>
  );
}