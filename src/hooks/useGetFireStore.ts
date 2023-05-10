import { useState } from 'react';
import { dbOnSnapshot } from 'firebases/FBInstance';
// eslint-disable-next-line import/named
import { DocumentData, Query } from 'firebase/firestore';
import { enqueueSnackbar } from 'notistack';

export const useGetFireStore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState<any[]>([]);
  const getData = async (query: Query<DocumentData>) => {
    setIsLoading(true);
    try {
      const getData = await dbOnSnapshot(query, (dbSnapShot) => {
        const Datas = dbSnapShot.docs.map((doc) => {
          return {
            data: doc.data(),
            id: doc.id,
          };
        });
        setDatas(Datas);
      });

      setIsLoading(false);
    } catch (error) {
      enqueueSnackbar(`스토리를 불러오는데 실패하였습니다.`, {
        variant: 'error',
      });
      setIsLoading(false);
    }
  };
  return { getData, datas, isLoading };
};
