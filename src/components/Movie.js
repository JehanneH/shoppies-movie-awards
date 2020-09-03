import React from "react";

const defaultImagePlaceholder =
  "https://critics.io/img/movies/poster-placeholder.png";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? defaultImagePlaceholder : movie.Poster;

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
      
    </div>
  );
};

export default Movie;