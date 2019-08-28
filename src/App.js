// @flow
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './contexts/FormContext';

import Routes from './components/Routes';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
