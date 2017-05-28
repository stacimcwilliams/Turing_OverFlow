import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './NavBar'
import DashboardContainer from '../containers/DashboardContainer';
import QuestionDetail from './QuestionView/QuestionDetail'
import AskQuestion from './MainView/AskQuestion'

const App = () => {
  return (
    <div>
      <NavBar />
      <Route exact path='/' component={ DashboardContainer } />
      <Route exact path='/question' component={ QuestionDetail }/>
      <Route exact path='/ask-question' component={ AskQuestion }/>
    </div>
  );
};

export default App;