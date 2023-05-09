import { useState } from 'react';
import { useUserContext } from './useUserContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

type ISignInProps = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch }: any = useUserContext();
  const auth = getAuth();
  const navigate = useNavigate();

  const signIn = ({ email, password }: ISignInProps) => {
    setError(null); // 아직 에러가 없으니 null 입니다.
    setIsPending(true); // 통신중이므로 true입니다.

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'login', payload: user });
        setError(null);
        setIsPending(false);
        navigate('/');
        enqueueSnackbar(`로그인에 성공하였습니다.`, {
          variant: 'success',
        });
        if (!user) {
          enqueueSnackbar(`로그인에 실패했습니다.`, {
            variant: 'error',
          });
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        enqueueSnackbar(`로그인에 실패했습니다.`, {
          variant: 'error',
        });
      });
  };
  return { error, isPending, signIn };
};
