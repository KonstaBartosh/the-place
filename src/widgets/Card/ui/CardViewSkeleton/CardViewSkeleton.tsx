import styles from './CardViewSkeleton.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => (
  <article className={styles.container}>
    <Skeleton
      height={282}
      width={282}
    />
    <div className={styles.description}>
      <Skeleton
        height={30}
        width={200}
      />
      <div className={styles.likeWrapper}>
        <button
          className={styles.likeButton}
          type="button"
        />
      </div>
    </div>
  </article>
);

export default CardSkeleton;
