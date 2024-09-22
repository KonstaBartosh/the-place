import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useHeaderNavButtons = () => {
  const [hasToken, setHasToken] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const isToken = localStorage.getItem('token');
    setHasToken(!!isToken);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setHasToken(false);
    navigate('/login');
  };

  return { hasToken, handleLogout };
};
