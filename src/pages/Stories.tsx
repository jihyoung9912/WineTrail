import { dbQuery, dbService, dbCollection, dbOnSnapshot } from 'firebases/FBInstance';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { DocumentData } from 'firebase/firestore';
import styled from 'styled-components';
import WineCard from 'components/Stories/WineCard';

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

const Stories = () => {
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
      {wineDatas.map((data) => {
        return <WineCard wineData={data} key={data.id} />;
      })}
    </Container>
  );
};

export default Stories;
