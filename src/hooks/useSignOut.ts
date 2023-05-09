import { useState } from 'react';
import { appUser } from 'firebases/config';
import { useUserContext } from './useUserContext';
import { signOut } from 'firebase/auth';
import { enqueueSnackbar } from 'notistack';

export const useSignOut = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch }: any = useUserContext();

  const SignOut = () => {
    setError(null);
    setIsPending(true);

    signOut(appUser)
      .then(() => {
        dispatch({ type: 'signout' });
        setError(null);
        setIsPending(false);
        enqueueSnackbar(`로그아웃 되었습니다`, {
          variant: 'success',
        });
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        enqueueSnackbar(`로그아웃에 실패했습니다. \n${err.message}`, {
          variant: 'error',
        });
      });
  };
  return { error, isPending, SignOut };
};
