const questions = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL_QUESTIONS' :
      return [...action.questions];

    case 'FETCH_POPULAR_QUESTIONS' :
      return [...action.questions];

    default:
      return state;
  }
};

export default questions;