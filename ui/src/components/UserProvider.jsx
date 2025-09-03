import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  user: undefined,
  setUser: () => null,
};

const UserProviderContext = createContext(initialState);


export function UserProvider({
  children,
  storageKey = "user",
  ...props
}) {
  const [user, setUserState] = useState(
    // () => localStorage.getItem(storageKey) || undefined
    () => undefined
  );

  const value = {
    user,
    setUser: (user) => {
      localStorage.setItem(storageKey, user);
      setUserState(user);
    },

  };

  return (
    <UserProviderContext.Provider {...props} value={value}>
      {children}
    </UserProviderContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserProviderContext);

  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");

  return context;
};
