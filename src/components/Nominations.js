import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  Pane,
  Dialog,
  Button,
  BanCircleIcon,
  UnorderedList,
  ListItem,
  Alert,
  FilmIcon
} from "evergreen-ui";

export default function Nominations({ movie, type }) {
  const [show, setShow] = useState(false);

  const { nominateList, removeMovieFromNominateList } = useContext(
    GlobalContext
  );

  return (
    <div>
      <Pane>
        <Dialog
          isShown={show.isShown}
          title="Your Nominations"
          onCloseComplete={() => setShow({ isShown: false })}
          hasFooter={false}
        >
          <div>
          You have nominated {nominateList.length} {nominateList.length === 1 ? "movie" : "movies"}
          </div>
          {nominateList.length > 0 ? (
            <div className="nominate-list">
              {nominateList.map((movie) => (
                <UnorderedList
                  icon={BanCircleIcon}
                  iconColor="danger"
                  onClick={() => removeMovieFromNominateList(movie.imdbID)}
                >
                  <ListItem>{movie.Title}</ListItem>
                </UnorderedList>
              ))}
            </div>
          ) : (
            <div className="errorMessage">
              <Alert
                intent="warning"
                title="You don't have any nominations in your list!"
              >
                To add nominations to your list search for your favourite movies
                and click nominate
              </Alert>
            </div>
          )}
          <div className="nomination-info">
            Remove a nomination from your list by clicking the{" "}
            <BanCircleIcon color="danger" /> icon
          </div>
        </Dialog>

        <Button
          marginTop={5}
          height={48}
          intent="success"
          appearance="minimal"
          iconBefore={FilmIcon}
          onClick={() => setShow({ isShown: true })}
        >
          Nominations
        </Button>
      </Pane>
    </div>
  );
}
