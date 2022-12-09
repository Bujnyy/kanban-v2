import React, { createContext, useEffect } from 'react';
import { signIn, signOut } from '../api/sessionsApi';
import { getUser, signUp } from '../api/usersApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(true);

  const authenticateUser = async () => {
    const response = await getUser();
    setUser(response?.data);
    setIsLoading(false);
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const signInAction = async ({ email = user?.email, password }) => {
    if (!email) {
      return;
    }

    const response = await signIn(email, password);

    setUser((state) => ({
      ...state,
      token: response?.data?.token,
    }));
  };

  const signUpAction = async ({ email = user?.email, password }) => {
    if (!email) {
      return;
    }

    const response = await signUp(email, password);

    console.log(response);
  };

  const signOutAction = async () => {
    const response = await signOut();

    setUser(undefined);

    console.log(response);
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
