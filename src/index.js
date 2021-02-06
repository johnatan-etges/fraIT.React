import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MyThemeProvider } from './hooks/themeContext';
import { MyViewProvider } from './hooks/viewContext';

ReactDOM.render(
  <React.StrictMode>
    <MyThemeProvider>
      <MyViewProvider>
        <App />
      </MyViewProvider>   
    </MyThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

