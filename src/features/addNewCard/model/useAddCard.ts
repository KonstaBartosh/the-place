import { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { CardsContext } from '../../cardsList';
import { postCardApi } from '../../../entities/card';
import { ERR_MESSAGE } from '../../../App/constants/constants';

type TProps = {
  handleClose: () => void;
};

export const useAddCard = ({ handleClose }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { cards, setCards } = useContext(CardsContext);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      const { name, link } = data;
      const newCard = await postCardApi(name, link);
      setCards([newCard, ...cards]);
      handleClose();
    } catch (error: unknown) {
      console.error(error);
      toast.error(ERR_MESSAGE.failedToAddCard);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onSubmit };
};
