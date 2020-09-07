import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  nominateList: localStorage.getItem('nominateList') ? JSON.parse(localStorage.getItem('nominateList')): []
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('nominateList', JSON.stringify(state.nominateList))
  }, [state]);

  // actions
  const addMovieToNominateList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_NOMINATIONS", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{ nominateList: state.nominateList, addMovieToNominateList }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
