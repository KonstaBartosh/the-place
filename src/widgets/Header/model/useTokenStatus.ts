import { useState, useEffect } from "react";

export const useTokenStatus = () => {
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
      const isToken = localStorage.getItem('token');
      setHasToken(!!isToken);
    }, []);

    return { hasToken, setHasToken };
  };
