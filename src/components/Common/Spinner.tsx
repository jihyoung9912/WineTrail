import BeatLoader from 'react-spinners/BeatLoader';
import styled from 'styled-components';
import { COLORS } from 'constants/COLOR';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface IInit {
  init: boolean;
}

const Spinner = ({ init }: IInit) => {
  console.log(init);
  return (
    <Container style={{ height: init ? '100vh' : '100%' }}>
      <BeatLoader size="30px" color={COLORS.secondary} />
    </Container>
  );
};

Spinner.defaultProps = {
  init: false,
};

export default Spinner;
