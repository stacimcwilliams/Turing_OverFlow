import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questionsReducer';

const appReducer = combineReducers({
  questions,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
