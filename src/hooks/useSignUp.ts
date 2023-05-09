import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useSnackbar } from 'notistack';

type ISignUpProps = {
  email: string;
  password: string;
  displayName: string;
};

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const signup = ({ email, password, displayName }: ISignUpProps) => {
    setIsPending(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/');
        enqueueSnackbar(`회원가입에 성공하였습니다.`, {
          variant: 'success',
        });
        const user = userCredential.user;
        if (!user) {
          enqueueSnackbar('오류가 발생했습니다. \n고객센터로 문의 부탁드립니다.', {
            variant: 'error',
          });
        }

        if (auth.currentUser) {
          updateProfile(auth.currentUser, { displayName })
            .then(() => {
              setError(null);
              setIsPending(false);
            })
            .catch((err) => {
              setError(err.message);
              setIsPending(false);
              enqueueSnackbar('회원가입에 실패하였습니다.', { variant: 'error' });
            });
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        enqueueSnackbar('회원가입에 실패하였습니다.', { variant: 'error' });
      });
  };

  return { error, isPending, signup };
};
