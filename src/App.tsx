import React, { useState } from 'react';
import { auth } from 'firebases/FBInstance';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from 'layout/layout';
import {
  Home,
  NotFound,
  SignIn,
  SignUp,
  MyPage,
  EditMyPage,
  Stories,
  StoryDetail,
  NewStories,
} from 'pages';
import GlobalStyles from 'styles/GlobalStyles';
import { useUserContext } from 'hooks/useUserContext';
import Spinner from 'components/Common/Spinner';

const App = () => {
  const { isAuthReady }: any = useUserContext();
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);

  return (
    <>
      <GlobalStyles />
      {isAuthReady ? (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Stories />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/mypage" element={<MyPage />}></Route>
              <Route path="/mypage/edit" element={<EditMyPage />}></Route>
              <Route path="/stories" element={<Stories />}></Route>
              <Route path="/stories/:id" element={<StoryDetail />}></Route>
              <Route path="/stories/new" element={<NewStories />}></Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default App;
