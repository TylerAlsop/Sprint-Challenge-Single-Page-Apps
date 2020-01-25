import React, { useEffect, useState } from "react";
import axios from 'axios';

const Character = props => {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState();
  console.log(props);

  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const id = props.match.params.id
    console.log("id: ", id);


    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(
        response => {
            setCharacter(response.data)
            console.log("Success:", response);}
      )
      .catch(err => console.error("Error", err.response))

  }, [props.match.params.id]);

  if (!character) {
    return <div>Loading character information...</div>;
  }

  const { name, status, species, type } = character;

  return (
    <section className="character-list">
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
      
    </section>
  );
}

export default Character;