import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

const movieApiUrl = "http://www.omdbapi.com/?s=girl&apikey=3ad7027";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(movieApiUrl)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setMovies(jsonResponse.Search);
        setLoading(false);
      });
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=3ad7027`)
    .then(response => response.json())
    .then(jsonResponse => {
      if (jsonResponse.Response === "True") {
        setMovies(jsonResponse.Search);
        setLoading(false);
      } else {
        setErrorMessage(jsonResponse.Error);
        setLoading(false);
      }
    });
  };

  return (
    <div className="App">
     <Header text="The Shoppies" />
     <Search search={search} />
     <div className="movies">
       {loading && !errorMessage ? (
        <span>loading...</span>
        ) : errorMessage ? (
         <div className="errorMessage">{errorMessage}</div>
       ) : (
         movies.map((movie, index) => (
           <Movie key={`${index}-${movie.Title}`} movie={movie} />
         ))
       )}
     </div>
   </div>
 );
};

export default App;
