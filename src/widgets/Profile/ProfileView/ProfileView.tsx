import styles from './ProfileView.module.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../../App/contexts';

import { ProfileModal, AvatarModal, NewCardModal } from '../../../features';
import userIcon from '../../../shared/icons/user.png';

const ProfileView = () => {
  const [profileIsOpen, setProfileOpen] = useState(false);
  const [userIsOpen, setUserOpen] = useState(false);
  const [addCardOpen, setAddCardOpen] = useState(false);

  const { user } = useContext(UserContext);
  const { name, about, avatar } = user || {};

  const userPic = user ? avatar : userIcon;
  const userName = user ? name : 'John Doe';
  const userBio = user ? about : 'Login to fill the bio!';

  return (
    <>
      <section className={styles.container}>
        <div
          className={styles.imageWrapper}
          onClick={() => setUserOpen(true)}
        >
          <img
            className={styles.image}
            src={userPic}
            alt={userName}
          />
          <div className={styles.overlay}>
            <div className={styles.overlayContent}></div>
          </div>
        </div>
        <div className={styles.dataWrapper}>
          <h1 className={styles.title}>{userName}</h1>
          <button
            className={styles.editButton}
            onClick={() => setProfileOpen(true)}
          />
          <p className={styles.occupation}>{userBio}</p>
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
