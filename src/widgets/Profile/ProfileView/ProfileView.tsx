import styles from './ProfileView.module.css';
import { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { ProfileModal, AvatarModal, NewCardModal } from '../../../features';
import userIcon from '../../../shared/icons/user.png';
import { AuthContext, UserContext, useUser } from '../../../entities/user';
import toast from 'react-hot-toast';
import { ERR_MESSAGE } from '../../../App/constants/constants';

const ProfileView = () => {
  const [profileIsOpen, setProfileOpen] = useState(false);
  const [userIsOpen, setUserOpen] = useState(false);
  const [addCardOpen, setAddCardOpen] = useState(false);

  const { user } = useContext(UserContext);
  const { isLoggedin } = useContext(AuthContext);
  const { getUser, isLoading } = useUser();

  const { name, about, avatar } = user || {};

  useEffect(() => {
    if (!isLoggedin) {
      try {
        getUser();
      } catch {
        toast.error(ERR_MESSAGE.user_failed);
      }
    }
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div
          className={styles.imageWrapper}
          onClick={() => setUserOpen(true)}
        >
          {!isLoading ? (
            <img
              className={styles.image}
              src={isLoggedin ? avatar : userIcon}
              alt={isLoggedin ? name : 'John Doe'}
            />
          ) : (
            <Skeleton
              circle
              width={120}
              height={120}
            />
          )}
          <div className={styles.overlay}>
            <div className={styles.overlayContent}></div>
          </div>
        </div>
        <div className={styles.dataWrapper}>
          {!isLoading ? (
            <h1 className={styles.title}>{isLoggedin ? name : 'John Doe'}</h1>
          ) : (
            <Skeleton
              width={300}
              height={50}
            />
          )}
          <button
            className={styles.editButton}
            onClick={() => setProfileOpen(true)}
          />
          {!isLoading ? (
            <p className={styles.occupation}>
              {isLoggedin ? about : 'Login to fill the bio!'}
            </p>
          ) : (
            <Skeleton
              width={200}
              height={25}
            />
          )}
        </div>
        <button
          className={styles.addButton}
          onClick={() => setAddCardOpen(true)}
        />
      </section>
      <ProfileModal
        isOpen={profileIsOpen}
        onClose={() => setProfileOpen(false)}
      />
      <AvatarModal
        isOpen={userIsOpen}
        onClose={() => setUserOpen(false)}
      />
      <NewCardModal
        isOpen={addCardOpen}
        onClose={() => setAddCardOpen(false)}
      />
    </>
  );
};

export default ProfileView;
