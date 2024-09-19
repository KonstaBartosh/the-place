import './styles/App.css';

import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { fetchCards, fetchUser } from './api/api';
import { UserContext } from './contexts/userContext';
import { CardsContext } from './contexts/cardsContext';

import { Header, Footer, Profile } from '../widgets';
import { CardsList } from '../features';
import { LoginPage, NotFoundPage, RegisterPage } from '../pages';

function App() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  const { setUser } = useContext(UserContext);

  const { setCards } = useContext(CardsContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      try {
        const [userRes, cardsRes] = await Promise.all([fetchUser(), fetchCards()]);

        const user = await userRes.json();
        const cards = await cardsRes.json();

        setUser(user);
        setCards(cards);
      } catch (err: any) {
        console.error('Ошибка!', err);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Profile isLoading={isLoading} />
                <CardsList isLoading={isLoading} />
              </>
            }
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </main>
      {isHome && <Footer />}
    </>
  );
}

export default App;
