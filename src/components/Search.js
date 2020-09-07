import React, { useState } from "react";
import { SearchInput, Button, Icon } from "evergreen-ui";

export default function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInput = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInput();
  };

  return (
    <form className="search">
      <SearchInput
        id="search-bar"
        value={searchValue}
        onChange={handleSearchInputChanges}
        placeholder="Type a movie here..."
        type="text"
      />
      <Button id="search-button" onClick={callSearchFunction} type="submit" value="search">
        Search
      </Button>
    </form>
  );
}
