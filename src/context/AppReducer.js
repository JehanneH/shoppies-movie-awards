export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_NOMINATIONS":
      return {
        ...state,
        nominateList: [action.payload, ...state.nominateList],
      };
    case "REMOVE_MOVIE_FROM_NOMINATIONS":
      return {
        ...state,
        nominateList: state.nominateList.filter(
          (movie) => movie.imdbID !== action.payload
        ),
      };
    default:
      return state;
  }
};
