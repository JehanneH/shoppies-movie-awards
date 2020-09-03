import React, { useState } from 'react'
import axios from 'axios'
import "./App.css";

import Results from "./components/Results";
import Search from "./components/Search";

const movieApiUrl = "http://www.omdbapi.com/?s=ant&apikey=3ad7027";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })
  const apiUrl = "http://www.omdbapi.com/?apikey=3ad7027";

  const search = (e) => {
    if (e.key === "Enter"){
      axios(apiUrl + "&s=" + state.s)
      .then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      })
    }
  }
  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return {...prevState, s: s}
    })
  }

  return (
    <div className="App">
      <header>
     <h1> Search Movies</h1>
     </header>
     <main>
       <Search handleInput={handleInput} search={search} />
       <Results results={state.results} />
     </main>
   </div>
 );
};

export default App;
