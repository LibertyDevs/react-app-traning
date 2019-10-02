import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from "history"

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <div>
      <Router history={ history } >
        <Routes />
      </Router>
    </div>
  );
};

export default App;
