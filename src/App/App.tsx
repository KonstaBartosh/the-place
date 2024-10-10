import './styles/App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ERR_MESSAGE } from './constants/constants';
import { Header, Footer } from '../widgets';
import AppRouter from './router/AppRouter';
import { useCards } from '../features/cardsList';
import React from 'react';

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/feed';

  const { getCards } = useCards();

  // Loading feed with cards
  useEffect(() => {
    if (isHome) {
      try {
        getCards();
      } catch {
        toast.error(ERR_MESSAGE.cardsFailed);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <AppRouter />
      {isHome && <Footer />}
      <Toaster />
    </>
  );
}

export default App;
