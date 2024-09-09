import styles from './Profile.module.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProfileSkeleton = () => (
  <section className={styles.container}>
    <div className={styles.imageWrapper}>
      <Skeleton circle={true} height={120} width={120} />
    </div>
    <div className={styles.dataWrapper}>
      <Skeleton height={30} width={300} />
      <button className={styles.editButton} type="button" />
      <Skeleton height={20} width={300} />
    </div>
    <button className={styles.addButton} type="button" />
  </section>
);

export default ProfileSkeleton;