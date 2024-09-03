import styles from './Profile.module.css';
import { TUser } from '../../Types/common';
import ProfileSkeleton from './ProfileSkeleton';

type ProfileProps = {
  user?: TUser | null;
  isLoading?: boolean;
};

const Profile = ({ user, isLoading }: ProfileProps) => {
  if (isLoading || !user) {
    return <ProfileSkeleton />
  }

  const { name, about, avatar } = user;

  return (
    <section className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={avatar} alt={name} />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}></div>
        </div>
      </div>
      <div className={styles.dataWrapper}>
        <h1 className={styles.title}>{name}</h1>
        <button className={styles.editButton} type="button" />
        <p className={styles.occupation}>{about}</p>
      </div>
      <button className={styles.addButton} type="button" />
    </section>
  );
};

export default Profile;
