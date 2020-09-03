import React from "react";
import { Popover, Button, Pane } from "evergreen-ui";

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
      <Popover
  content={({ close }) => (
    <Pane
      width={320}
      height={320}
      paddingX={40}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Button onClick={close}>Close</Button>
    </Pane>
  )}
  shouldCloseOnExternalClick={false}
>
  <Button>Trigger Popover</Button>
</Popover>
    </div>
  );
};

export default Movie;