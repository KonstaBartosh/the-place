import { TCard } from '../../Types/common';
import styles from './Card.module.css';

type TCardProps = {
  card: TCard;
};

const Card = ({ card }: TCardProps) => {
  const { name, link } = card;

  return (
    <article className={styles.container}>
      <img className={styles.image} src={link} alt={name} />
      <button className={styles.deleteButton} type="button"></button>
      <div className={styles.description}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.likeWrapper}>
          <button className={styles.likeButton} type="button"></button>
          <span className={styles.likeCounter}></span>
        </div>
      </div>
    </article>
  );
};

export default Card;