import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, Route } from "react-router-dom";
import Character from "./Character";

const CharacterList = props => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getCharacters();
  }, []);
  
  return (
    <div className="character-list">
      {characters.map(character => (
        <CharacterInfo key={character.id} character={character} />
      ))}
    </div>
  );
}

function CharacterInfo({ character }) {
  const { name, status, species, type } = character;
  return (
    <div className="character-card">
      <Link to={`/character/${character.id}`}>
      <h2 className="character-name">{name}</h2>
        <div className="character-status">
          Status: <strong>{status}</strong>
        </div>
        <div className="character-species">
          Species: <strong>{species}</strong>
        </div>
        <div className="character-type">
          Type: <strong>{type}</strong>
        </div>
        ))}
      </Link>

      <Route exact path="/character/:id" render={props => <Character />} />
    </div>
  );
}
export default CharacterList