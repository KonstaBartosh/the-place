import { createContext, useState } from 'react';
import { TUser } from '../../../App/types/common';

type TUserContext = {
  user: TUser | null;
  setUser: (user: TUser | null) => void;
};

const initialState: TUserContext = {
  user: null,
  setUser: () => {},
};

// Create a context object for the user data
export const UserContext = createContext<TUserContext>(initialState);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<TUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
