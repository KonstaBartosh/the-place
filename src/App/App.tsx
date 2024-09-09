import './App.css';
import { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Components/Header/Header';
import Footer from '../Shared/Components/Footer/Footer';
import Profile from '../Entities/Profile/Profile';
import CardsLayout from '../Shared/Components/CardsLayout/CardsLayout';
import { fetchCards, fetchUser } from '../Shared/Api/api';
import { UserContext } from '../Shared/Context/UserContext';
import { CardsContext } from '../Shared/Context/CardsContext';


function App() {
  const { setUser } = useContext(UserContext);
  const { cards, setCards } = useContext(CardsContext);
  
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    
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

      } catch (err: any) {
        console.error('Ошибка!', err);
      } finally {
        setIsLoading(false);
      }
    }

    getData()
  }, []);

  return (
    <>
      <Header />
      <main style={{ flexGrow: 1}}>
        <Profile isLoading={isLoading} />
        <CardsLayout cards={cards} isLoading={isLoading} />
      </main>
      <Footer />
    </>
  )
}

export default App
