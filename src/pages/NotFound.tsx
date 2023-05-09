import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';

const ErrorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const ErrorImg = styled.img`
  margin-top: 10vh;
  width: 310px;
  height: 10%;
`;

const ErrorMsg = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  color: #808080;
`;

const ToHomeButton = styled.button`
  width: 10rem;
  height: 4rem;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border: none;
  border-radius: 15px;
  box-shadow: 5px 8px 15px rgba(0, 0, 0, 0.1);

  :hover {
    background-color: ${COLORS.secondary};
    cursor: pointer;
  }
`;

const NotFound = () => {
  return (
    <ErrorContainer>
      <ErrorImg
        src={`${process.env.PUBLIC_URL}/assets/images/Error-404.jpg`}
        alt="404 Not Found Error Imgae"
      />
      <ErrorMsg>페이지를 찾을 수 없습니다.</ErrorMsg>
      <Link to="/">
        <ToHomeButton>홈으로가기</ToHomeButton>
      </Link>
    </ErrorContainer>
  );
};

export default NotFound;
