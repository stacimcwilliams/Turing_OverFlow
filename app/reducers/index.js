import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';


const appReducer = combineReducers({

});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;