import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
// eslint-disable-next-line import/named
import { DocumentData } from 'firebase/firestore';

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 23rem;
  height: 10rem;
  border: 3px solid ${COLORS.primary};
  border-radius: 10px;
  box-shadow: 1px 1px 10px ${COLORS.secondary};
`;

const WineImg = styled.img`
  width: 50%;
  height: 100%;
`;

const WineInfoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  padding: 1rem;
`;

const WineName = styled.div`
  width: 100%;
  font-size: 1.5rem;
`;

const WineVintage = styled.div`
  width: 100%;
  font-size: 1.5rem;
`;

const WinePrice = styled.div`
  width: 100%;
  font-size: 1.5rem;
`;

const WineSatisfaction = styled.div`
  width: 100%;
  font-size: 1.5rem;
`;

const WineCard = (wineData: DocumentData) => {
  const data = wineData.wineData.data;
  console.log(data);

  return (
    <Card>
      <WineImg src={`${process.env.PUBLIC_URL}/assets/images/WineImg.png`} alt="WineImg" />
      <WineInfoSection>
        <WineName>와인 이름</WineName>
        <WineVintage>와인 이름</WineVintage>
        <WinePrice>와인 이름</WinePrice>
        <WineSatisfaction>와인 이름</WineSatisfaction>
      </WineInfoSection>
    </Card>
  );
};

export default WineCard;
