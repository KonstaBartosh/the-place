import './App.css';
import { useEffect, useState } from 'react';
import Header from '../Shared/Components/Header/Header';
import Footer from '../Shared/Components/Footer/Footer';
import Profile from '../Shared/Components/Profile/Profile';
import CardsLayout from '../Shared/Components/CardsLayout/CardsLayout';
import { fetchCards, fetchUser } from '../Shared/Api/api';
import { TCard, TUser } from '../Shared/Types/common';


function App() {
  const [cards, setCards] = useState<TCard[]>([]);
  const [user, setUser] = useState<TUser | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      try {
        const [userRes, cardsRes] = await Promise.all([
          fetchUser(),
          fetchCards()
        ]);

        const user = await userRes.json();
        const cards = await cardsRes.json();

        setUser(user);
        setCards(cards);

      } catch (err) {
        console.error('Ошибка!', err)
      }
    }

    getData()
  }, []);

  console.log(user)

  return (
    <>
      <Header />
      <main style={{ flexGrow: 1}}>
        <Profile />
        <CardsLayout cards={cards} />
      </main>
      <Footer />
    </>
  )
}

export default App
