import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import DashboardContainer from '../containers/DashboardContainer';

const App = () => {
  return (
    <div>
      <h1>Turing OverFlow</h1>
      <DashboardContainer />
    </div>
  );
};

export default App;