import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movie from "./components/Movie";
import Search from "./components/Search";
import {GlobalProvider} from "./context/GlobalState";


import {
  Spinner,
  Pane,
  ThemeProvider,
  defaultTheme,
  Alert,
  InlineAlert,
} from "evergreen-ui";


const newTheme = {
  ...defaultTheme,
  spinnerColor: "hotpink",
};

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  


  const search = (searchValue) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=3ad7027`)
      .then((response) => response.json())
      .then((jsonResponse) => {
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
    <GlobalProvider>
    <div className="App">
      <Navbar text="The Shoppies" />
      <Search search={search} />
      <div className="movies">
        {loading && !errorMessage ? (
          <Pane marginX="auto" marginY={120}>
            <ThemeProvider value={newTheme}>
              <Spinner size={80} />
            </ThemeProvider>
          </Pane>
        ) : errorMessage ? (
          // <div className="errorMessage">
          //   <Alert intent="warning" title={errorMessage} />
          // </div>
          <div className="errorMessage">
            <InlineAlert intent="warning">{errorMessage}</InlineAlert>
          </div>
        ) : (
          movies.map((movie, index) => (
            <Movie
              key={`${index}-${movie.Title}`}
              movie={movie}
              Title={movie.Title}
              Year={movie.Year}
              id={movie.imdbID}
            />
          ))
        )}
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
