import { COLORS } from 'constants/COLOR';
import styled from 'styled-components';
// eslint-disable-next-line import/named
import { DocumentData } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

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
  font-weight: bold;
`;

const WineVintage = styled.div`
  width: 100%;
  font-size: 1.1rem;
`;

const WineSatisfaction = styled.div`
  width: 100%;
  font-size: 1.1rem;
`;

const CreatedAt = styled.div`
  width: 100%;
  font-size: 1.1rem;
  color: gray;
`;

const WineCard = (wineData: DocumentData) => {
  const [satisfaction, setSatisfaction] = useState('');
  const data = wineData.wineData.data;
  console.log(data);

  useEffect(() => {
    setSatisfaction(data?.data?.wineData?.satisfaction);
  }, [data]);

  switch (satisfaction) {
    case '0':
      setSatisfaction('😍 최고예요');
      break;
    case '1':
      setSatisfaction('😊️ 만족했어요');
      break;
    case '2':
      setSatisfaction('🙂 괜찮았어요');
      break;
    case '3':
      setSatisfaction('😕 그저 그래요');
      break;
    case '4':
      setSatisfaction('😔 별로예요');
      break;
  }

  return (
    <Card>
      <WineImg src={`${process.env.PUBLIC_URL}/assets/images/WineImg.png`} alt="WineImg" />
      <WineInfoSection>
        <WineName>{data?.data?.wineData?.wineName}</WineName>
        <WineVintage>{data?.data?.wineData?.vintage}년</WineVintage>
        <WineSatisfaction>{satisfaction}</WineSatisfaction>
        <CreatedAt>{data.createAt}</CreatedAt>
      </WineInfoSection>
    </Card>
  );
};

export default WineCard;
