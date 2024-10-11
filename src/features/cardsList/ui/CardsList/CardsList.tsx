import { useContext } from 'react';
import styles from '../CardsList/CardsList.module.css';
import { TCard } from '../../../../App/types/common';
import { Card, CardSkeleton } from '../../../../widgets';
import { CardsContext, useCards } from '../..';

const CardsList = () => {
  // Generate an array of null values to use as skeletons
  const skeletonList = Array(9).fill(null);

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
