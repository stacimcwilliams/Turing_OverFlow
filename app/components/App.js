import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Dashboard from './Dashboard';

const App = () => {
  return (
    <div>
      <h1>Turing OverFlow</h1>
      <Dashboard />
    </div>
  );
};

export default App;