import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MyThemeProvider } from './hooks/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <MyThemeProvider>     
      <App />
    </MyThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

