import React, { useState, useContext } from 'react';
import { auth } from 'firebases/FBInstance';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'layout/layout';
import { Home, NotFound, SignIn, SignUp } from 'pages';
import { UserContext } from 'context/UserContext';
import GlobalStyles from 'styles/GlobalStyles';

const App = () => {
  const userInfo = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);

  return (
    <>
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
    </>
  );
};

export default App;
