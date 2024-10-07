import styles from '../CardsList/CardsList.module.css';

import { useContext } from 'react';

import { TCard } from '../../../../App/types/common';

import { Card, CardSkeleton } from '../../../../widgets';
import { CardsContext } from '../../../../entities/cards';

type TPops = {
  isLoading?: boolean;
};

// Generate an array of null values to use as skeletons
const skeletonList = Array(9).fill(null);

const CardsList = ({ isLoading }: TPops) => {
  const { cards } = useContext(CardsContext);

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
