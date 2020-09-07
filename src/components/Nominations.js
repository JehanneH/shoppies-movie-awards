import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { GlobalContext } from "../context/GlobalState"
import {
  Pane,
  Dialog,
  Button,
  BanCircleIcon,
  UnorderedList,
  ListItem,
  Paragraph,
} from "evergreen-ui";

export default function Nominations(props) {
  const [show, setShow] = useState(false);

  const {nominateList} = useContext(GlobalContext)
  return (
    <div>
      <Pane>
        <Dialog
          isShown={show.isShown}
          title="Your Nominations"
          onCloseComplete={() => setShow({ isShown: false })}
          hasFooter={false}
        >
         {nominateList.map((movie) => (
           <p>{movie.Title}</p>
         ))}

          {/* <UnorderedList icon={BanCircleIcon} iconColor="danger">
            <ListItem>Now and Then</ListItem>
            <ListItem>Pirates of the Caribbean: The Curse of the Black Pearl</ListItem>
            <ListItem>Bend It Like Beckham</ListItem>
            <ListItem>Happy-Go-Lucky</ListItem>
            <ListItem>13 Going on 30</ListItem>
            
          </UnorderedList> */}

         
          <div>
            Remove a nomination from your list by clicking the{" "}
            <BanCircleIcon color="danger" /> icon
          </div>
        </Dialog>

        <Button onClick={() => setShow({ isShown: true })}>Nominations</Button>
      </Pane>
    </div>
  );
}
