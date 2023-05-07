import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 20px;
  flex: 1;
`;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <MainContainer>
      {/*<Navbar />*/}
      <Content>{children || <Outlet />}</Content>
      {/*<Footer />*/}
    </MainContainer>
  );
};

export default Layout;
