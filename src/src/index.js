import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//catch problems early while developing
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
