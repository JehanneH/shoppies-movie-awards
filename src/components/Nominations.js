import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState"
import {
  Pane,
  Dialog,
  Button,
  BanCircleIcon,
  UnorderedList,
  ListItem,
  Alert,
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

          {nominateList.length > 3 ? (
  <div>
  {nominateList.map((movie) => (
    <UnorderedList icon={BanCircleIcon} iconColor="danger">
    <ListItem>{movie.Title}</ListItem>
    
  </UnorderedList>
  ))}
 </div> ) : (
    <div className="errorMessage">
    <Alert intent="danger" title="You don't have any nominations yet!" />
    </div>
 )}
        
          

         
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
