import React, { useState } from "react";

export default function SearchMovies(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInput = () => {
    setSearchValue("");
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
