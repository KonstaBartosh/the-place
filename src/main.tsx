import './index.css';
import App from './App/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from './App/contexts/userContext';
import { CardsContextProvider } from './App/contexts/cardsContext';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './App/contexts/authContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <CardsContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </CardsContextProvider>
    </UserContextProvider>
  </StrictMode>
);
