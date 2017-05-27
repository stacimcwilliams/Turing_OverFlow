import 'whatwg-fetch';

const fetchAllQuestionsAction = (questions) => {
  return {
    type: 'FETCH_ALL_QUESTIONS',
    questions,
  };
};

export const fetchAllQuestions = () => {
  return dispatch =>
  fetch('/api/v1/questions')
  .then(response =>
    response.json(),
  )
  .then((questions) => {
    dispatch(fetchAllQuestionsAction(questions));
  });
};