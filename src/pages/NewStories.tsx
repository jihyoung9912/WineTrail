import React, { useState } from 'react';
import { usePostFireStore } from 'hooks/usePostFireStore';
// eslint-disable-next-line import/named
import { Select, SelectChangeEvent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import styled from 'styled-components';
import { COLORS } from '../constants/COLOR';
import Spinner from '../components/Common/Spinner';
import { enqueueSnackbar } from 'notistack';

const Container = styled.div`
  width: 350px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 20px #000;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
`;

const SignLabel = styled.label`
  color: ${COLORS.fontPrimary};
  font-size: 2.3em;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 60%;
  height: 30px;
  background: ${COLORS.primaryVariant};
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 40px;
  color: ${COLORS.white};
  background: ${COLORS.primary};
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
  :hover {
    background: ${COLORS.secondary};
  }
`;

const NewStories = () => {
  const { postData, isLoading } = usePostFireStore();
  const init = {
    wineName: '',
    vintage: '',
    price: '',
    satisfaction: '0',
  };
  const [wineData, setWineData] = useState(init);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wineData.wineName === '' || wineData.vintage === '' || wineData.price === '') {
      enqueueSnackbar(`공백 없이 작성해주세요.`, {
        variant: 'error',
      });
      return;
    }
    postData({ wineData }).then(() => {
      setWineData(init);
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'wineName') {
      setWineData({
        ...wineData,
        wineName: value,
      });
    }
    if (name === 'vintage') {
      setWineData({
        ...wineData,
        vintage: value,
      });
    }
    if (name === 'price') {
      setWineData({
        ...wineData,
        price: value,
      });
    }
    if (name === 'satisfaction') {
      setWineData({
        ...wineData,
        satisfaction: value,
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <Form onSubmit={onSubmit}>
            <SignLabel>Wine Story</SignLabel>
            <Input
              type="text"
              name="wineName"
              value={wineData?.wineName}
              onChange={onChange}
              placeholder="와인명"
              required
            />
            <Input
              type="number"
              name="vintage"
              value={wineData?.vintage}
              onChange={onChange}
              placeholder="빈티지"
              required
            />
            <Input
              type="number"
              name="price"
              value={wineData?.price}
              onChange={onChange}
              placeholder="가격"
              required
            />
            <Select
              value={wineData?.satisfaction}
              name="satisfaction"
              onChange={onChange}
              style={{ width: '60%' }}
            >
              <MenuItem value={'0'}>😍 최고예요</MenuItem>
              <MenuItem value={'1'}>😊️ 만족했어요</MenuItem>
              <MenuItem value={'2'}>🙂 괜찮았어요</MenuItem>
              <MenuItem value={'3'}>😕 그저 그래요</MenuItem>
              <MenuItem value={'4'}>😔 별로예요</MenuItem>
            </Select>
            <SubmitButton type="submit" onClick={onSubmit}>
              저장
            </SubmitButton>
          </Form>
        </Container>
      )}
    </>
  );
};

export default NewStories;
