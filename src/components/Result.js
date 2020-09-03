import React from "react";

export default function Result({ result }) {
  return (
    <div className="result">
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
    </div>
  );
}
