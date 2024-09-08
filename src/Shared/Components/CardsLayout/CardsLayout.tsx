import { useContext } from 'react';
import { CardsContext } from '../../Context/CardsContext';
import { TCard } from '../../Types/common';
import Card from '../../../Entities/Card/Card';
import CardSkeleton from '../../../Entities/Card/CardSkeleton';
import styles from './CardsLayout.module.css';

type TPops = {
  isLoading?: boolean;
};

const CardsLayout = ({ isLoading }: TPops) => {
  const { cards } = useContext(CardsContext);

  console.log(cards)

  return (
    <div className={styles.container}>
      {/* If isLoading, show skeletons; else, render cards */}
      {isLoading ? (
        Array(9).fill(null).map((_, index) => (
          <CardSkeleton key={index} />
      ))
      ) : (
        cards?.map((card: TCard) => (
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
