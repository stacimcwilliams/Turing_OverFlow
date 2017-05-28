import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './NavBar'
import DashboardContainer from '../containers/DashboardContainer';
import QuestionDetail from './QuestionView/QuestionDetail'

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>Turing OverFlow</h1>
      <Route exact path='/' component={DashboardContainer} />
      <Route exact path='/question' component={QuestionDetail}/>
    </div>
  );
};

export default App;