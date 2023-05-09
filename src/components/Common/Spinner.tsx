import BeatLoader from 'react-spinners/BeatLoader';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Spinner = () => {
  return (
    <Container>
      <BeatLoader size="30px" color={COLORS.secondary} />
    </Container>
  );
};

export default Spinner;
