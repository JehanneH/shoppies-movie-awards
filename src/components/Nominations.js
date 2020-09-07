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
          {/* display amount of movies maybe? */}
          {nominateList.length} {nominateList.length === 1 ? "Movie" : "Movies"}
          {nominateList.length > 0 ? (
            <div>
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
          <div>
            Remove a nomination from your list by clicking the{" "}
            <BanCircleIcon color="danger" /> icon
          </div>
        </Dialog>

        <Button
          margin={40}
          height={48}
          intent="success"
          appearance="minimal"
          onClick={() => setShow({ isShown: true })}
        >
          Nominations
        </Button>
      </Pane>
    </div>
  );
}
