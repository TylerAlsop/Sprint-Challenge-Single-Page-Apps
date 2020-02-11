import React from "react";
import { Badge } from 'reactstrap';


function CharacterCard({ character }) {
  const { name, status, species, type } = character;
  return (
    <div className="character-card">
        <h2><Badge color="primary">{name}</Badge></h2>
        <div className="character-status">
          <strong><Badge color="warning">Status: </Badge></strong> {status}
        </div>
        <div className="character-species">
          <strong>Species: </strong> {species}
        </div>
        <div className="character-type">
          <strong>Type: </strong> {type}
        </div>
    </div>
  );
}

export default CharacterCard;