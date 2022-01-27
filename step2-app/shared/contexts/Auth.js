import { createContext, useContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  profile: null,
  setIsLoggedIn: () => {},
  setProfile: () => {},
});

export const useAuth = () => useContext(AuthContext);
