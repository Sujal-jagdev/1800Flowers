import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FlowersProvider } from './Context';

ReactDOM.render(
  <FlowersProvider>
    <App />
  </FlowersProvider>,
  document.getElementById('root')
);
