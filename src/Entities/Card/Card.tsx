import styles from "./Card.module.css";

import { useCallback, useContext, useMemo, useState } from "react";
import { UserContext } from "../../Shared/Context/UserContext";
import { CardsContext } from "../../Shared/Context/CardsContext";
import { deleteCardApi, handleLikeApi } from "./Api/CardApi";
import { TCard } from "../../Shared/Types/common";

import Modal from "../../Shared/Components/Modal/Modal";
import Button from "../../Shared/Components/Button/Button";
import ImageModal from "./Modals/ImageModal";

type TProps = {
  card: TCard;
};

const Card = ({ card }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [isDeleteModal, setDeleteModal] = useState(false);

  const { cards, setCards } = useContext(CardsContext);

  const { user } = useContext(UserContext);

  const { _id, name, link, owner, likes } = card;

  // Define if the current user is the owner of the card
  const isUserOwner = useMemo(
    () => owner?._id === user?._id, [owner, user]);

  // Define the number of likes for the card
  const likeCounter = useMemo(
    () => likes?.length || null, [likes]);

  // Define if the current user has liked the card
  const isLiked = useMemo(
    () => likes?.some((like) => like._id === user?._id), [likes, user]);

  const handleDelete = useCallback(async () => {
    if (isUserOwner && _id) {
      try {
        setIsLoading(true);
        await deleteCardApi(_id);
        setCards(cards.filter((item) => item._id !== card._id));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, [_id, isUserOwner, setCards, cards]);

  const handleLike = useCallback(async () => {
    try {
      const resCard = await handleLikeApi(_id, isLiked);
      setCards(
        cards.map((card) => (card._id === resCard._id ? resCard : card))
      );
    } catch (error) {
      console.error(error);
    }
  }, [_id, isLiked, setCards, cards]);

  // Define the class name for the like button based on the current state
  const likeButtonClass = `${styles.likeButton} ${
    isLiked && styles.likeButtonIsActive
  }`;

  return (
    <>
    <article className={styles.container}>
      <img
        className={styles.image}
        src={link}
        alt={name}
        onClick={() => setShowModal(true)} />
      {isUserOwner && (
        <button
          className={styles.deleteButton}
          aria-label="Delete card"
          onClick={() => setDeleteModal(true)}
          />
      )}
      <div className={styles.description}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.likeWrapper}>
          <button
            className={likeButtonClass}
            aria-label={isLiked ? "Unlike card" : "Like card"}
            onClick={handleLike} />
          <span className={styles.likeCounter}>
            {likeCounter}
          </span>
        </div>
      </div>
    </article>
    {/* Display the image modal if the card is being displayed */}
    <ImageModal
        isOpen={isShowModal}
        name={name}
        link={link}
        onClose={() => setShowModal(false)} />
    {/* Display the delete modal if the card is being displayed */}
    <Modal 
      isOpen={isDeleteModal} 
      title={'Delete card ?'} 
      onClose={() => setDeleteModal(false)}
      >
      <Button 
        label="Delete"
        type="button"
        ariaLabel="Delete card"
        isLoading={isLoading}
        loadingLabel="Deleting..."
        onClick={() => handleDelete()}
        />
    </Modal>
    </>
  );
};

export default Card;
