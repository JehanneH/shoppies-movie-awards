import React from "react";
import Nominations from "./Nominations";
import { GlassIcon } from "evergreen-ui";

export default function Navbar(props) {
  return (
    <header className="App-header">
      <div className="header-title">
      <GlassIcon size={32} marginRight={16} color="success" />
      <h2>{props.text}</h2>
      </div>
      <Nominations />
    </header>
  );
}
