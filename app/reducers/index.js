import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questionsReducer';
import searchResults from './searchReducer';

const appReducer = combineReducers({
  questions,
  searchResults
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
