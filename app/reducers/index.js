import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import questions from './questionsReducer';
import searchResults from './searchReducer';
import popularQuestions from './popularQuestionsReducer';
import recentTags from './recentTagsReducer';
import storedHistory from './addHistoryReducer';


const appReducer = combineReducers({
  questions,
  searchResults,
  popularQuestions,
  recentTags,
  storedHistory,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
