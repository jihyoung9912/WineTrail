import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #ededed;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 20px;
  flex: 1;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MainContainer>
      <Navbar />
      <Content>{children || <Outlet />}</Content>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
