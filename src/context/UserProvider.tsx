import { User } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { UserContext } from 'context/UserContext';
import { auth } from 'FBInstance';

interface Props {
  children: React.ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged((fbUser) => {
      console.log(fbUser);
      setUser(fbUser);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
