import React, { useState }  from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";



export default function App() {
  return (
    <main>
      <Header />
    </main>
  );
}








// For Reference

// import React, { useState } from 'react';
// import { Route } from "react-router-dom";
// import MovieList from "./Movies/MovieList";
// import Movie from "./Movies/Movie";


// import SavedList from './Movies/SavedList';

// const App = () => {
//   const [savedList, setSavedList] = useState( [] );

//   const addToSavedList = movie => {
//     setSavedList( [...savedList, movie] );
//   };

//   return (
//     <div>
//       <SavedList list={savedList} />
      
//       <Route exact path="/" component={MovieList} />
//       <Route path="/movies/:id" component={Movie} />

//     </div>
//   );
// };

// export default App;