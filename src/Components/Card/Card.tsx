import styles from './Card.module.css';

const Card = (): React.ReactElement => {
  return (
    <article className={styles.container}>
      <img className={styles.image} src="" alt="" />
      <button className={styles.deleteButton} type="button"></button>
      <div className={styles.description}>
        <h2 className={styles.title}>Lorem ipsum</h2>
        <div className={styles.likeWrapper}>
          <button className={styles.likeButton} type="button"></button>
          <span className={styles.likeCounter}></span>
        </div>
      </div>
    </article>
  );
};

export default Card;