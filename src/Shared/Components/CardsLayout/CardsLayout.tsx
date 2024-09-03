import styles from './CardsLayout.module.css';
import Card from '../Card/Card';
import { TCard } from '../../Types/common';
import CardSkeleton from '../Card/CardSkeleton';

type CardsLayoutProps = {
  cards: TCard[];
  isLoading?: boolean;
};

const CardsLayout = ({ cards, isLoading }: CardsLayoutProps) => {
  return (
    <div className={styles.container}>
      {/* If isLoading, show skeletons; else, render cards */}
      {isLoading ? (
        Array(9).fill(null).map((_, index) => (
          <CardSkeleton key={index} />
      ))
      ) : (
        cards.map((card: TCard) => (
          <Card 
            key={card._id}
            card={card}
          />
        ))
      )}
    </div>
  );
}

export default CardsLayout;
