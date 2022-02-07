import { createContext, useContext } from "react";

export const AuthContext = createContext({
  isSignedIn: false,
  profile: null,
  setIsSignedIn: () => {},
  setProfile: () => {},
});

export const useAuth = () => useContext(AuthContext);
