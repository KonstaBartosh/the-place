import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../App/contexts';

export const useHandleLogout = () => {
  const navigate = useNavigate();
  const { setLoggedin } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedin(false);
    navigate('/login');
  };

  return { handleLogout };
};
