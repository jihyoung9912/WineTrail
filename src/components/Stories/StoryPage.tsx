import { dbQuery, dbService, dbCollection } from 'firebases/FBInstance';
import { useEffect } from 'react';
// eslint-disable-next-line import/named
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGetFireStore } from 'hooks/useGetFireStore';
import { Spinner, WineCard } from 'components';
import { COLORS } from 'constants/COLOR';
import { useUserContext } from 'hooks/useUserContext';

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
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: ${COLORS.primary};
  border-radius: 50%;
`;

const PlusBtn = styled.span`
  font-size: 4rem;
  margin-top: 10px;
  color: white;
`;

const StoryPage = () => {
  const query = dbQuery(dbCollection(dbService, 'wineStories'));
  const { getData, isLoading, datas } = useGetFireStore();
  const { user }: any = useUserContext();

  useEffect(() => {
    getData(query);
  }, []);

  return (
    <>
      {datas && !isLoading ? (
        <Container>
          {datas.map((data) => {
            return <WineCard wineData={data} key={data.id} />;
          })}
          {user ? (
            <Link to={'/stories/new'}>
              <NewStory>
                <PlusBtn>+</PlusBtn>
              </NewStory>
            </Link>
          ) : (
            <></>
          )}
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default StoryPage;
