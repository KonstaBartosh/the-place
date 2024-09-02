import styles from './Profile.module.css';

const Profile = (): React.ReactElement => {
  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src="" alt="" />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}></div>
        </div>
      </div>
      <div className={styles.dataWrapper}>
        <h1 className={styles.title}>Lorem ipsum</h1>
        <button className={styles.editButton} type="button"></button>
        <p className={styles.occupation}>Lorem ipsum</p>
      </div>
      <button className={styles.addButton} type="button"></button>
    </section>
  );
};

export default Profile;