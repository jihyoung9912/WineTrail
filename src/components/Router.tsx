import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Auth, NotFound } from 'pages/index';
import Layout from 'layout/layout';

interface IUser {
  isLoggedIn: boolean;
}

const Router = (isLoggedIn: IUser) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {isLoggedIn ? (
            <Route path="/" element={<Home />}></Route>
          ) : (
            <Route path="/" element={<Auth />}></Route>
          )}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
