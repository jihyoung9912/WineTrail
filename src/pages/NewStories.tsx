import React, { useState } from 'react';
import { usePostFireStore } from 'hooks/usePostFireStore';

const NewStories = () => {
  const { postData } = usePostFireStore();
  const [data, setData] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    postData({ data }).then(() => {
      setData('');
    });
  };

  const onChange = ({ target: { value } }: any) => {
    setData(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={data} onChange={onChange} placeholder="write down" />
        <input type="submit" value="data" />
      </form>
    </>
  );
};

export default NewStories;
