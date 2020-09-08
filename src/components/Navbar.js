import React from "react";
import Nominations from "./Nominations";

export default function Navbar(props) {
  return (
    <header className="App-header">
      
      <h2>🏆 {props.text}</h2>
      <Nominations />
    </header>
  );
}
