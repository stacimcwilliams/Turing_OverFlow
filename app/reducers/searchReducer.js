const searchResults = (state = { resultsArray: [] }, action) => {
  switch (action.type) {
    case 'ADD_SEARCH_RESULTS' :
      return action.searchResults;

    default:
      return state;
  }
};

export default searchResults;
