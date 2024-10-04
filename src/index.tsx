import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyles from './global-styles';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
