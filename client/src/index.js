import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CategoryState from './context/notes/CategoryState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CategoryState>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CategoryState>
);

