import React from 'react';
import ReactDOM from 'react-dom';
import FindRecipeApp from './FindRecipeApp';
import './index.css';
import { AppProvider } from 'GlobalContext';

ReactDOM.render(
  // <React.StrictMode>
  <AppProvider>
    <FindRecipeApp />
  </AppProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
