import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appUser } from 'firebases/config';
import { useUserContext } from './useUserContext';
import { signOut } from 'firebase/auth';

export const useSignOut = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch }: any = useUserContext();

  const SignOut = () => {
    setError(null);
    setIsPending(true);

    signOut(appUser)
      .then(() => {
        console.log('asd');
        dispatch({ type: 'signout' });
        setError(null);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        alert(err.message);
      });
  };
  return { error, isPending, SignOut };
};
