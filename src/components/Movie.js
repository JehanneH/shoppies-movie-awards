import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  SideSheet,
  Heading,
  Paragraph,
  Button,
  AddIcon,
  Alert,
  Card,
  Pane,
} from "evergreen-ui";

const defaultImagePlaceholder =
  "https://critics.io/img/movies/poster-placeholder.png";

export default function Movie({ movie, Title, Year, imdbID }) {
  const { addMovieToNominateList, nominateList } = useContext(GlobalContext);

  const [show, setShow] = useState(false);

  const poster =
    movie.Poster === "N/A" ? defaultImagePlaceholder : movie.Poster;

  let storedMovie = nominateList.find((o) => o.imdbID === movie.imdbID);

  const nominationDisabled = storedMovie ? true : false;

  return (
    <div className="movie">
      <div className="movie-card">
        <div>
          <img
            className="posters"
            width="200"
            alt={`The movie titled: ${Title}`}
            src={poster}
            onClick={() => setShow({ isShown: true })}
          />
        </div>
        <div className="movie-card-info">
          <div className="title-year">
            <Heading size={600}>{Title}</Heading>
            <Paragraph size={500}>({Year})</Paragraph>
          </div>
          <Paragraph className="more-info" color="muted" size={300}>
            Click the poster for more
          </Paragraph>
        </div>
      </div>
      <SideSheet
        isShown={show.isShown}
        onCloseComplete={() => setShow({ isShown: false })}
      >
        <Pane id="side-sheet">
          <Card className="side-poster-container">
            <img className="side-poster" src={poster} alt=""></img>
          </Card>
          <div className="title-card">
            <div className="add-button">
              {nominateList.length >= 5 ? (
                <Alert
                  intent="danger"
                  title="You have added the max (5) amount of nominations to your list"
                >
                </Alert>
              ) : (
                <div>
                  <Button
                    appearance="minimal"
                    intent="success"
                    iconBefore={AddIcon}
                    height={32}
                    disabled={nominationDisabled}
                    onClick={() => addMovieToNominateList(movie)}
                  >
                    Nominate
                  </Button>
                </div>
              )}
            </div>
            <Heading size={600}>{Title}</Heading>
            <Paragraph size={400} color="muted">
              ({Year})
            </Paragraph>
          </div>
        </Pane>
      </SideSheet>
    </div>
  );
}
