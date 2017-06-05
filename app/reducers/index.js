import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questionsReducer';
import searchResults from './searchReducer';
import popularQuestions from './popularQuestionsReducer';

const appReducer = combineReducers({
  questions,
  searchResults,
  popularQuestions,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
