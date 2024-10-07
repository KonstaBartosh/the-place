import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { fetchUser } from '../../../App/api/api';
import { TAuthData, loginModel } from '../../../features/auth';
import { AuthContext, UserContext } from '../../../App/contexts';

export const useHandleLogin = () => {
  const { loginUser } = loginModel.useLogin();
  const { setUser } = useContext(UserContext);
  const { setLoggedin } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = async (data: TAuthData) => {
    try {
      await loginUser(data);

      const response = await fetchUser();
      const user = await response.json();

      setUser(user);
      setLoggedin(true);

      navigate('/', { replace: true });
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return { onLogin };
};
