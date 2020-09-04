import React, { useState } from "react";
import { SideSheet, Paragraph, Button } from "evergreen-ui";

const defaultImagePlaceholder =
  "https://critics.io/img/movies/poster-placeholder.png";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? defaultImagePlaceholder : movie.Poster;

    const [show, setShow] = useState(false)
    const isShown = () => setShow(false)
    
  return (
    <div className="movie">

      <React.Fragment>
      <SideSheet
        isShown={show.isShown}
        onCloseComplete={() => setShow({ isShown: false })}
      >
        <Paragraph margin={40}>{movie.Title}</Paragraph>
        <Button>
          Nominate
        </Button>
      </SideSheet>

      <h2>{movie.Title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
          onClick={() => setShow({ isShown: true })}
        />
      </div>
      <p>({movie.Year})</p>
    </React.Fragment>

    
    </div>
  );
};

export default Movie;
