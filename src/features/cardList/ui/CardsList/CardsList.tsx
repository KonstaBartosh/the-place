import styles from '../CardsList/CardsList.module.css';
import { useContext } from 'react';
import { TCard } from '../../../../App/types/common';
import { Card, CardSkeleton } from '../../../../widgets';
import { CardsContext, useCards } from '../../../../entities/cards';

// Generate an array of null values to use as skeletons
const skeletonList = Array(9).fill(null);

const CardsList = () => {
  const { cards } = useContext(CardsContext);
  const { isLoading } = useCards();

  return (
    <div className={styles.container}>
      {isLoading
        ? skeletonList.map((_, index) => <CardSkeleton key={index} />)
        : cards?.map((card: TCard) => (
            <Card
              key={card._id}
              card={card}
            />
          ))}
    </div>
  );
};

export default CardsList;
