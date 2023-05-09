import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from 'constants/COLOR';

const FooterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem 3rem;
  margin-top: 1rem;
  background-color: ${COLORS.primaryBackground};
  color: ${COLORS.black};
`;

const FooterMaxContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.secondaryBackground};
`;

const FooterAddress = styled.div`
  text-align: center;
  font-size: 13px;
  @media (max-width: 820px) {
    margin-top: 1.5rem;
    width: 100%;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 13rem;
`;

const FooterTerms = styled.h1`
  font-size: 18px;
  font-weight: 800;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  font-size: 10px;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterMaxContainer>
        <FooterTop>
          <Link to="/">
            {/*<img*/}
            {/*  src={`${process.env.PUBLIC_URL}/assets/images/logo-white.svg`}*/}
            {/*  alt="IBELEVESURVEY Logo"*/}
            {/*  style={{ width: '7rem', marginRight: '2rem' }}*/}
            {/*/>*/}
          </Link>
          <FooterInfo>
            <Link to="/tos">
              <FooterTerms>이용약관</FooterTerms>
            </Link>
            <Link to="/privacy">
              <FooterTerms>개인정보처리방침</FooterTerms>
            </Link>
          </FooterInfo>
          <FooterAddress>
            Wine-Trail | 국민대학교 | 서울특별시 성북구 정릉로 77 <br />
            사업자번호: 327-69-00498
          </FooterAddress>
        </FooterTop>
        <FooterBottom>copyright@WINETRAIL</FooterBottom>
      </FooterMaxContainer>
    </FooterBox>
  );
};

export default Footer;
