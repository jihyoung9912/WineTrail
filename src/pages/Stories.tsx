import { dbQuery, dbService, dbCollection, dbOnSnapshot } from 'firebases/FBInstance';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { DocumentData } from 'firebase/firestore';

interface SnapshotData {
  data: DocumentData;
  id: string;
}

const Stories = () => {
  const [datas, setDatas] = useState<SnapshotData[]>([]);

  useEffect(() => {
    const query = dbQuery(dbCollection(dbService, 'wineStories'));
    const unsubscribe = dbOnSnapshot(query, (dbSnapShot) => {
      const newLaughterArray = dbSnapShot.docs.map((doc) => {
        return {
          data: doc.data(),
          id: doc.id,
        };
      });
      setDatas(newLaughterArray);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log(datas);

  return <>Stories</>;
};

export default Stories;
