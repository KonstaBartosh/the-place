import styles from './Card.module.css';

import { useState } from 'react';
import { useCardActions } from '../../model/useCardActions';
import { TCard } from '../../../../App/types/common';
import { OpenImageModal, DeleteCardModal } from '../../../../features';

type TProps = {
  card: TCard;
};

const Card = ({ card }: TProps) => {
  const [isShowModal, setShowModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);

  const {
    isLiked,
    isUserOwner,
    isLoading,
    likeCounter,
    handleLike,
    handleDelete,
  } = useCardActions(card);

  // Define the class name for the like button based on the current state
  const likeButtonClass = `${styles.likeButton} ${isLiked && styles.likeButtonIsActive}`;

  return (
    <>
      <article className={styles.container}>
        <img
          className={styles.image}
          src={card.link}
          alt={card.name}
          onClick={() => setShowModal(true)}
        />
        {isUserOwner && (
          <button
            className={styles.deleteButton}
            aria-label="Delete card"
            onClick={() => setDeleteModal(true)}
          />
        )}
        <div className={styles.description}>
          <h2 className={styles.title}>{card.name}</h2>
          <div className={styles.likeWrapper}>
            <button
              className={likeButtonClass}
              aria-label={isLiked ? 'Unlike card' : 'Like card'}
              onClick={handleLike}
            />
            <span className={styles.likeCounter}>{likeCounter}</span>
          </div>
        </div>
      </article>
      <OpenImageModal
        isOpen={isShowModal}
        name={card.name}
        link={card.link}
        onClose={() => setShowModal(false)}
      />
      <DeleteCardModal
        isOpen={isDeleteModal}
        isLoading={isLoading}
        onClick={handleDelete}
        onClose={() => setDeleteModal(false)}
      />
    </>
  );
};

export default Card;
