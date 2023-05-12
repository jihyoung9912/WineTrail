import styled from 'styled-components';

const Home = () => {
  const Img = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(`{`${process.env.PUBLIC_URL}/assets/images/WineImg.png`}`);
  `;
  return (
    <span>
      <Img></Img>
    </span>
  );
};

export default Home;
