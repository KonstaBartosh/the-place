import { useCallback, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { deleteCardApi, handleLikeApi } from '../../../App/api/api';
import { TCard } from '../../../App/types/common';
import { CardsContext } from '../../../entities/cards';
import { AuthContext, UserContext } from '../../../entities/user';

export const useCardActions = (card: TCard) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { cards, setCards } = useContext(CardsContext);
  const { isLoggedin } = useContext(AuthContext);
  const { user } = useContext(UserContext);

  const { _id, likes, owner } = card;

  // Define if the current user is the owner of the card
  const isUserOwner = useMemo(() => owner?._id === user?._id, [owner, user]);

  // Define the number of likes for the card
  const likeCounter = useMemo(() => likes?.length || null, [likes]);

  // Define if the current user has liked the card
  const isLiked = useMemo(
    () => likes?.some((like) => like._id === user?._id),
    [likes, user]
  );

  const handleDelete = useCallback(async () => {
    if (_id) {
      try {
        setIsLoading(true);
        await deleteCardApi(_id);
        setCards(cards.filter((item) => item._id !== card._id));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  }, [_id, setCards, cards]);

  const handleLike = useCallback(async () => {
    if (!isLoggedin) {
      toast.error('Please login');
      navigate('/login');
      return;
    }

    try {
      const resCard = await handleLikeApi(_id, isLiked);
      setCards(
        cards.map((card) => (card._id === resCard._id ? resCard : card))
      );
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  }, [_id, isLiked, setCards, cards]);

  return {
    isLoading,
    isLiked,
    likeCounter,
    isUserOwner,
    handleLike,
    handleDelete,
  };
};
