import React from "react";
import { Badge } from 'reactstrap';


function CharacterCard({ character }) {
  const { name, status, species, type } = character;
  return (
    <div className="character-card">
        <h2><Badge color="primary">{name}</Badge></h2>
        <div className="character-status">
          Status: <em><Badge color="warning">{status}</Badge></em>
        </div>
        <div className="character-species">
          Species: <strong>{species}</strong>
        </div>
        <div className="character-type">
          Type: <strong>{type}</strong>
        </div>
    </div>
  );
}

export default CharacterCard