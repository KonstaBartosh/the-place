import { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { TUser } from '../../../App/types/common';
import { ERR_MESSAGE } from '../../../App/constants/constants';
import { UserContext, updateUserApi } from '../../../entities/user';

type TProps = {
  onClose: () => void;
};

export const useUpdateUser = ({ onClose }: TProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const onSubmit = async (data: TUser) => {
    setIsLoading(true);

    try {
      const updatedUser = await updateUserApi(data as TUser);
      setUser(updatedUser);
      setIsLoading(false);
      onClose();
    } catch (error) {
      console.error(error);
      toast.error(ERR_MESSAGE.updateUserFailed);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, user, onSubmit };
};
