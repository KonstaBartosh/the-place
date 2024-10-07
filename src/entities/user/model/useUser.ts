import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { UserContext, fetchUser } from '..';

export const useUser = () => {
  const ERROR_MESSAGE = 'Failed to fetch user';

  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const getUser = async () => {
    setIsLoading(true);

    try {
      const response = await fetchUser();

      if (response.status !== 200) {
        toast.error(ERROR_MESSAGE);
        throw new Error(ERROR_MESSAGE);
      }

      const user = await response.json();

      setUser(user);
    } catch (err) {
      toast.error(ERROR_MESSAGE);
      throw new Error(ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };

  return { getUser, isLoading };
};
