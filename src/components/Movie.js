import React from "react";

const defaultImagePlaceholder =
  "https://lh3.googleusercontent.com/proxy/lxZJ7pNqhcMGQj3PHpt4Os57N4CUI-p9GKSVl3SYKiJTWTsURA6npPVgEA9cJciAukuNaK7bJUm8OZao7OPLslXNkJrtxiw4dAabZWYdS6eBD5MAq1D_KNP23oyYRYVxCYS7olFxj97WxQ";

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