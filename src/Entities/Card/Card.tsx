import styles from "./Card.module.css";
import { useCallback, useContext, useMemo } from "react";
import { UserContext } from "../../Shared/Context/UserContext";
import { CardsContext } from "../../Shared/Context/CardsContext";
import { TCard } from "../../Shared/Types/common";
import { deleteCardApi, handleLikeApi } from "./Api/CardApi";

type TProps = {
  card: TCard;
};

const Card = ({ card }: TProps) => {
  const { cards, setCards } = useContext(CardsContext);
  const { user } = useContext(UserContext);

  const { _id, name, link, owner, likes } = card;
  console.log("Card component rendered");

  const isUserOwner = useMemo(
    () => owner?._id === user?._id, [owner, user]);

  const likeCounter = useMemo(
    () => likes?.length || null, [likes]);

  const isLiked = useMemo(
    () => likes?.some((like) => like._id === user?._id), [likes, user]);


  const handleDelete = useCallback(async () => {
    if (isUserOwner && _id) {
      try {
        await deleteCardApi(_id);
        setCards(cards.filter((item) => item._id !== card._id));
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

  const likeButtonClass = `${styles.likeButton} ${
    isLiked && styles.likeButtonIsActive
  }`;

  return (
    <article className={styles.container}>
      <img className={styles.image} src={link} alt={name} />
      {isUserOwner && (
        <button 
          className={styles.deleteButton}
          aria-label="Delete card"
          onClick={handleDelete} 
          />
      )}
      <div className={styles.description}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.likeWrapper}>
          <button 
            className={likeButtonClass} 
            aria-label={isLiked ? "Unlike card" : "Like card"}
            onClick={handleLike} 
            />
          <span className={styles.likeCounter}>
            {likeCounter}
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
