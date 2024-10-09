import './styles/App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ERR_MESSAGE } from './constants/constants';
import { useCards } from '../entities/cards';
import { Header, Footer } from '../widgets';
import AppRouter from './router/AppRouter';

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const { getCards } = useCards();

  // Loading feed with cards
  useEffect(() => {
    if (isHome) {
      try {
        getCards();
      } catch {
        toast.error(ERR_MESSAGE.cards_failed);
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
