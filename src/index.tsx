import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContextProvider } from 'context/UserContext';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </UserContextProvider>
  </React.StrictMode>,
);
