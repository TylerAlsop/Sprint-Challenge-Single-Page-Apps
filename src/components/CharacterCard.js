import React from "react";

export default function CharacterCard() {
  return (
    <div className="character-card">
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

        {/* {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
        ))} */}
    </div>
  )
}
