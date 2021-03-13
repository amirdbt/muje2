import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{ user, isLoading, error, onLogin, isAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
