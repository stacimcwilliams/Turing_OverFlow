import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './NavBar'
import DashboardContainer from '../containers/DashboardContainer';
import QuestionDetail from './QuestionView/QuestionDetail'

const App = () => {
  return (
    <div>
      <h1>Turing OverFlow</h1>
      <NavBar />
      <Route exact path='/' component={DashboardContainer} />
      <Route exact path='/question' component={QuestionDetail}/>
    </div>
  );
};

export default App;