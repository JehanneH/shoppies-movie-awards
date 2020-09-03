import React, { useState } from "react";
import axios from "axios";
import "./App.css";

import Results from "./components/Results";
import Search from "./components/Search";
import PopUp from "./components/PopUp";

const movieApiUrl = "http://www.omdbapi.com/?s=ant&apikey=3ad7027";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiUrl = "http://www.omdbapi.com/?apikey=3ad7027";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const openPopUp = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopUp = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="App">
      <header>
        <h1> Search Movies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopUp}/>
        {typeof state.selected.Title != "undefined" ? (
          <PopUp selected={state.selected} closePopup={closePopUp} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
