import { useContext, useState } from 'react';
import { fetchCards } from '../api/fetchCards';
import { CardsContext } from '../context/cardsContext';
import { ERR_MESSAGE } from '../../../App/constants/constants';

export const useCards = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setCards } = useContext(CardsContext);

  const getCards = async () => {
    setIsLoading(true);

    try {
      const response = await fetchCards();

      if (response.status !== 200) {
        throw new Error(ERR_MESSAGE.cards_failed);
      }

      const cards = await response.json();

      setCards(cards);
    } catch (err) {
      throw new Error(ERR_MESSAGE.cards_failed);
    } finally {
      setIsLoading(false);
    }
  };

  return { getCards, isLoading };
};
