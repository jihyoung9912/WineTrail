import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';
import { useSignIn } from 'hooks/useSignIn';
import Spinner from 'components/Common/Spinner';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from 'firebases/FBInstance';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 350px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 20px #000;
  margin-top: 50px;
`;

const SignLabel = styled.label`
  display: flex;
  color: ${COLORS.fontPrimary};
  font-size: 2.3em;
  justify-content: center;
  margin: 60px 60px 40px 60px;
  font-weight: bold;
  cursor: pointer;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 30px;
  background: ${COLORS.primaryVariant};
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 40px;
  margin: 20px auto;
  color: ${COLORS.white};
  background: ${COLORS.primary};
  font-size: 1em;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
  :hover {
    background: ${COLORS.secondary};
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isPending, signIn } = useSignIn();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const onGoogleClick = async (e: React.MouseEvent<HTMLElement>) => {
    const { name } = e.target as HTMLButtonElement;
    let provider;
    try {
      if (name === 'google') {
        provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        enqueueSnackbar(`로그인에 성공하였습니다.`, {
          variant: 'success',
        });
        navigate('/');
      }
    } catch (error) {
      enqueueSnackbar(`로그인에 실패했습니다.${error}`, {
        variant: 'error',
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <Container>
          <form>
            <SignLabel>Wine-Trail</SignLabel>
            <Input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={onChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              required
            />
            <SubmitButton type="submit" onClick={handleSubmit}>
              Sign In
            </SubmitButton>
          </form>
          <SubmitButton name="google" onClick={onGoogleClick}>
            Continue with Google
          </SubmitButton>
        </Container>
      )}
    </>
  );
};

export default SignIn;
