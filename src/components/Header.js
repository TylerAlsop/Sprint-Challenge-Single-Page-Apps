import React from "react";
import { Route, Link } from "react-router-dom";

import WelcomePage from "./WelcomePage";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      
      <Link className="home-button" to="/">Home</Link>



      {/* <WelcomePage /> */}
      {/* <Route path="/characterlist" component={CharacterList} /> */}
    </header>
  );
}
