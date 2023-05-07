import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

interface ISignUpProps {
  email: string;
  password: string;
  displayName: string;
}

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const signup = ({ email, password, displayName }: ISignUpProps) => {
    setIsPending(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert('회원가입 성공');
        navigate('/');
        const user = userCredential.user;
        if (!user) {
          alert('회원가입에 실패했습니다.');
        }

        if (auth.currentUser) {
          console.log(auth.currentUser);
          updateProfile(auth.currentUser, { displayName })
            .then(() => {
              setError(null);
              setIsPending(false);
            })
            .catch((err) => {
              setError(err.message);
              setIsPending(false);
              alert(err.message);
            });
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        alert(err.message);
      });
  };

  return { error, isPending, signup };
};
