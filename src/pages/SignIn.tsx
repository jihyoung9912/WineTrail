import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  // createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {});

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

  const SignIn = (e: React.FormEvent) => {
    e.preventDefault();
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
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input type="submit" onClick={SignIn} value="Sign In" />

        <Link to="/signup">
          <input type="submit" value="Sign Up" />
        </Link>
      </form>
      <div>
        <button>Continue with Google</button>
      </div>
    </div>
  );
};

export default SignIn;
