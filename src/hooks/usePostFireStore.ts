import { dbService, dbAddDoc, dbCollection } from 'firebases/FBInstance';

export const usePostFireStore = () => {
  const postData = async (data: any) => {
    try {
      const docRef = await dbAddDoc(dbCollection(dbService, 'wineStories'), {
        data,
        createAt: Date.now(),
      });
      console.log('Document written with ID: ', docRef);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };
  return { postData };
};
