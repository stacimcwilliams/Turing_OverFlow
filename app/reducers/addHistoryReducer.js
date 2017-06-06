const storedHistory = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HISTORY_TO_STORE' :
      return action.history;

    default:
      return state;
  }
};

export default storedHistory;
