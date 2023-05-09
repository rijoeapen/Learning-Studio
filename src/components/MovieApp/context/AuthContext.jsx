import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = () => {
    const token = uuidv4();
    localStorage.setItem("auth_token", token);
    setAuth(auth);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
