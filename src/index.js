import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>       {/*agrego el browser router y wrappeo en él a APP */}
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
