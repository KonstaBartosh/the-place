import { createContext, useState } from 'react';
import { TCard } from '../types/common';

type TCardsContext = {
  cards: TCard[];
  setCards: (cards: TCard[]) => void;
};

export const CardsContext = createContext<TCardsContext>({
  cards: [],
  setCards: () => {},
});

export const CardsContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cards, setCards] = useState<TCard[]>([]);

  return <CardsContext.Provider value={{ cards, setCards }}>{children}</CardsContext.Provider>;
};
