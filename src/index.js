import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import Main from './module/Main';
import reportWebVitals from './config/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('rootik'));
root.render(
  <StrictMode>
    <Main />
  </StrictMode>
);

reportWebVitals();
