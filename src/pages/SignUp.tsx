import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignUp';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { signup } = useSignup();

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
    <div>
      <form>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="displayName"
          type="text"
          placeholder="NickName"
          value={displayName}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input type="submit" onClick={SignUp} value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
