import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
