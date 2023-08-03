import React, { useState, createContext, useContext, useMemo } from "react";
import { useEffect } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const getInitialState = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : {};
};

function UserContextProvider(props) {
  const [user, setUser] = useState(getInitialState);

  useEffect(() => {
    if (user.token) setUser(user);
  }, [user]);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
}

export default UserContextProvider;