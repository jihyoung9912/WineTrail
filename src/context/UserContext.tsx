import React, { createContext, useEffect, useReducer } from 'react';
import { appUser } from 'firebases/config';
import { onAuthStateChanged } from 'firebase/auth';

interface Props {
  children: React.ReactNode;
}

const UserContext = createContext(undefined);

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'signin':
      return { ...state, user: action.payload };
    case 'signout':
      return { ...state, user: null };
    case 'authIsReady':
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    isAuthReady: false,
  });

  useEffect(() => {
    return onAuthStateChanged(appUser, (user) => {
      dispatch({ type: 'authIsReady', payload: user });
    });
  }, []);

  return <UserContext.Provider value={{ ...state, dispatch }}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
