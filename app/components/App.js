import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './NavBar'
import DashboardContainer from '../containers/DashboardContainer';
import AskQuestionContainer from '../containers/AskQuestionContainer';
import QuestionDetailContainer from '../containers/QuestionDetailContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Route exact path='/' component={ DashboardContainer } />
      <Route exact path='/ask-question' component={ AskQuestionContainer }/>
      <Route path="/question/:id" render={ ({ match }) =>  {
        return <QuestionDetailContainer id={match.params.id} />
      }} />
    </div>
  );
};

export default App;
