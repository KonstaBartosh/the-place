import './styles/App.css';

import { useContext, useEffect, useState } from 'react';

import { fetchCards, fetchUser } from './api/api';
import { UserContext } from './contexts/userContext';
import { CardsContext } from './contexts/cardsContext';

import { Header, Footer, Profile } from '../widgets';
import { CardsList } from '../features';

function App() {
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
        <Profile isLoading={isLoading} />
        <CardsList isLoading={isLoading} />
      </main>
      <Footer />
    </>
  );
}

export default App;
