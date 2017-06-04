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

export const fetchQuestionTags = (id) => {
  return () =>
  fetch(`/api/v1/questions/${id}/tags`)
  .then(response =>
      response.json(),
  );
};

export const addQuestion = (title, question, name, tags) => {
  return () =>
    fetch('/api/v1/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, question, user_name: name, tags }),
    })
    .then(response =>
      response.json(),
    );
};


export const updateQuestionCounters = (id, direction, counter) => {
  return () =>
    fetch(`/api/v1/questions/${id}?counter=${counter}&value=${direction}`, {
      method: 'PATCH',
    })
    .then(response =>
      response.json(),
    );
};

export const addAnswer = (question_id, answer, name) => {
  return () =>
    fetch('/api/v1/answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question_id, user_name: name, answer }),
    })
    .then(response =>
      response.json(),
    );
};

const searchResults = (searchResults) => {
  return {
    type: 'ADD_SEARCH_RESULTS',
    searchResults,
  };
}

export const fetchSearch = (searchTerm) => {
  // check on spaces here, may need conversion
  console.log('searching for', searchTerm)
  return dispatch => {
    return fetch(`/api/v1/search/${searchTerm}`)
    .then((response) => {
      console.log('got response', response)
      response.json()
      .then((json) => {
        console.log('json is', json)
        dispatch(searchResults(json))
      })
    })

  } 
}

