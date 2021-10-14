import React, { FC } from 'react';
// components
import Spinner from '../Spinner';
// styles
import { LoadingContainer } from './Loading.styled';

const Loading: FC = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;
