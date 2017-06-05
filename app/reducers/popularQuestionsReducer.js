const popularQuestions = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POPULAR_QUESTIONS' :
      return [...action.popularQuestions];

    default:
      return state;
  }
};

export default popularQuestions;