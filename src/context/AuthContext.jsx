import React, { createContext, useEffect } from 'react';
import { signIn, signOut } from '../api/sessionsApi';
import { getUser, signUp } from '../api/usersApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  const authenticateUser = async () => {
    const response = await getUser();
    console.log(response);
    setUser(response?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const signInAction = async ({ email = user?.email, password }) => {
    if (!email) {
      return;
    }

    const response = await signIn(email, password);

    // console.log(response);

    setUser((state) => ({
      ...state,
      token: response?.user?.token,
    }));
  };

  const signUpAction = async ({ email = user?.email, password }) => {
    if (!email) {
      return;
    }

    const response = await signUp(email, password);
    console.log('dupa');

    console.log(response);
  };

  const signOutAction = async () => {
    const response = await signOut();
    console.log(response);

    setUser((state) => ({
      ...state,
      token: undefined,
    }));
  };

  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInAction,
        signUpAction,
        signOutAction,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
