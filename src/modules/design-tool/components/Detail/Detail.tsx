import React, { FC } from 'react';
// interfaces
import { DetailProps } from './Detail.interface';
// styles
import { DetailContainer, DetailContent, DetailLabel } from './Detail.styled';

const Detail: FC<DetailProps> = ({ label, value }) => {
  return (
    <DetailContainer>
      <DetailLabel>{label}</DetailLabel>
      <DetailContent>{value}</DetailContent>
    </DetailContainer>
  );
};

export default Detail;
