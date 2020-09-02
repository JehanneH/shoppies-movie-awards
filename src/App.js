import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchMovies from "./components/searchMovies"

function App() {
  return (
    <div className="App">
      <h1>Search a Movie</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
