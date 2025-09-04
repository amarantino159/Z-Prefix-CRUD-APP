import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  user: undefined, // default used to recognize a logged out visitor on the site
  setUser: () => null,
};

const UserProviderContext = createContext(initialState);
// this is the context provider so each page can remember
// the user logged in through out the site
// didn't get local storage to work and it was bottom of the
// barrel to get working so we can pretend it was a purposeful
// security measure

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
    // important bit: only a getter and a basic setter. nothing else
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
