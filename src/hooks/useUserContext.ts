import { useContext } from 'react';
import { UserContext } from 'context/UserContext';

export const useUserContext = () => {
  // Now We can use state (user), and dispatch func in UserContext
  return useContext(UserContext);
};
