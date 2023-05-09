import React, { useState } from 'react';
import { auth } from 'firebases/FBInstance';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'layout/layout';
import { Home, NotFound, SignIn, SignUp } from 'pages';

import { UserContextProvider } from 'context/UserContext';
import GlobalStyles from 'styles/GlobalStyles';
import { useUserContext } from './hooks/useUserContext';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);

  return (
    <>
      <UserContextProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
};

export default App;
