import { useNavigate } from "react-router-dom";

export const useLogout = ({ setHasToken }: any) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setHasToken(false);
    navigate('/login');
  };

  return { handleLogout };
};
