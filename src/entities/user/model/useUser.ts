import { useContext, useState } from 'react';
import { UserContext, fetchUser } from '..';
import { ERR_MESSAGE } from '../../../App/constants/constants';

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const getUser = async () => {
    setIsLoading(true);

    try {
      const response = await fetchUser();

      if (response.status !== 200) {
        throw new Error(ERR_MESSAGE.user_failed);
      }

      const user = await response.json();

      setUser(user);
    } catch (err) {
      throw new Error(ERR_MESSAGE.user_failed);
    } finally {
      setIsLoading(false);
    }
  };

  return { getUser, isLoading };
};
