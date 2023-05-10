import { dbQuery, dbService, dbCollection, dbOnSnapshot } from 'firebases/FBInstance';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { DocumentData } from 'firebase/firestore';
import styled from 'styled-components';
import WineCard from 'components/Stories/WineCard';
import { Link } from 'react-router-dom';

interface SnapshotData {
  data: DocumentData;
  id: string;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
`;

const NewStory = styled.button`
  position: absolute;
  top: 100px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: palevioletred;
  border-radius: 50%;
`;

const PlusBtn = styled.span`
  font-size: 4rem;
  margin-top: 10px;
  color: white;
`;

const StoryPage = () => {
  const [wineDatas, setWineDatas] = useState<SnapshotData[]>([]);

  useEffect(() => {
    const query = dbQuery(dbCollection(dbService, 'wineStories'));
    const unsubscribe = dbOnSnapshot(query, (dbSnapShot) => {
      const newWineDatas = dbSnapShot.docs.map((doc) => {
        return {
          data: doc.data(),
          id: doc.id,
        };
      });
      setWineDatas(newWineDatas);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      <Link to={'/stories/new'}>
        <NewStory>
          <PlusBtn>+</PlusBtn>
        </NewStory>
      </Link>
      {wineDatas.map((data) => {
        return <WineCard wineData={data} key={data.id} />;
      })}
    </Container>
  );
};

export default StoryPage;
