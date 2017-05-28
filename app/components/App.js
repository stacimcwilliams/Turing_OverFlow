import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import NavBar from './NavBar'
import DashboardContainer from '../containers/DashboardContainer';

const App = () => {
  return (
    <div>
      <h1>Turing OverFlow</h1>
      <NavBar />
      <DashboardContainer />
    </div>
  );
};

export default App;