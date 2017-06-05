const popularQuestions = (state = [], action) => {
  console.log('REDUCER', action);
  switch (action.type) {
    case 'FETCH_POPULAR_QUESTIONS' :
      return [...action.popularQuestions];

    default:
      return state;
  }
};

export default popularQuestions;