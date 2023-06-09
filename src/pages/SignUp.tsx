import React, { useState } from 'react';
import { useSignup } from 'hooks/useSignUp';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';
import Spinner from 'components/Common/Spinner';

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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { isPending, signup } = useSignup();

  const SignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    signup({ email, password, displayName });
  };

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
    if (name === 'displayName') {
      setDisplayName(value);
    }
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
            <Input
              name="displayName"
              type="text"
              placeholder="NickName"
              value={displayName}
              onChange={onChange}
              required
            />
            <SubmitButton type="submit" onClick={SignUp}>
              Sign Up
            </SubmitButton>
          </form>
        </Container>
      )}
    </>
  );
};

export default SignUp;
