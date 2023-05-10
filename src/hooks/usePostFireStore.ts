import { dbService, dbAddDoc, dbCollection } from 'firebases/FBInstance';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const usePostFireStore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const postData = async (data: any) => {
    setIsLoading(true);
    try {
      const docRef = await dbAddDoc(dbCollection(dbService, 'wineStories'), {
        data,
        createAt: Date.now(),
      });
      navigate('/stories');
      enqueueSnackbar(`스토리 작성이 완료되었습니다.`, {
        variant: 'success',
      });
      setIsLoading(false);
    } catch (error) {
      enqueueSnackbar(`스토리 작성에 실패하였습니다.`, {
        variant: 'error',
      });
      setIsLoading(false);
    }
  };
  return { postData, isLoading };
};
