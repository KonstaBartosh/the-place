import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

type TAuthContext = {
  isLoggedin: boolean;
  setLoggedin: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<TAuthContext>({
  isLoggedin: false,
  setLoggedin: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedin, setLoggedin] = useState(false);

  // Check if user is logged in on component mount and set the state accordingly
  useEffect(() => {
    const isToken = localStorage.getItem('token');
    setLoggedin(!!isToken);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedin, setLoggedin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
