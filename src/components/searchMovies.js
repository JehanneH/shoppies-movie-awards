import React from "react";

export default function SearchMovies() {

  const searchMovies = async (event) => {
    event.preventDefault();
    console.log("submitting");

    const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=3ad7027'

  }
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlForm="query">
        Movie Name
      </label>
      <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park"/>
      <button className="button" type="submit">Search</button>
    </form>
  );
}
