export default (state, action) => {
  switch(action.type) {
    case "ADD_MOVIE_TO_NOMINATIONS":
      return {
        ...state,
        nominateList: [action.payload, ...state.nominateList]
      }
    default:
      return state;
  }
}