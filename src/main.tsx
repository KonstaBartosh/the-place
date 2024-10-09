import './index.css';
import App from './App/App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { UserContextProvider } from './entities/user/context/userContext';
import { CardsContextProvider } from './features/cardsList/context/cardsContext';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './entities/user/context/authContext';

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
