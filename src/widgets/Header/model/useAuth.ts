import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const [isLoggedin, setLoggedin] = useState(false);
    const navigate = useNavigate(); 

    useEffect(() => {
      const isToken = localStorage.getItem('token');
      setLoggedin(!!isToken);
    }, []);

    const handleLogout = () => {
      localStorage.removeItem('token');
      setLoggedin(false);
      navigate('/login');
    };

    return { isLoggedin, handleLogout };
  };
