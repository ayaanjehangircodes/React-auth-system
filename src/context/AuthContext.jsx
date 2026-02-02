import React, { createContext, useState, useEffect } from "react";
import {
  loginUser,
  registerUser,
  getUserFromLocalStorage,
} from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (email, password) => {
    const loggedInUser = loginUser(email, password);
    if (loggedInUser) {
      setUser(loggedInUser);
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    const registeredUser = registerUser(email, password);
    if (registeredUser) {
      setUser(registeredUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
