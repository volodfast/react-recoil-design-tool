import React, { FC } from 'react';
// interfaces
import { DetailFallbackProps } from './Detail.interface';
// styles
import { DetailContainer, DetailSkeleton, DetailLabel } from './Detail.styled';

const DetailFallback: FC<DetailFallbackProps> = ({ label }) => {
  return (
    <DetailContainer>
      <DetailLabel>{label}</DetailLabel>
      <DetailSkeleton />
    </DetailContainer>
  );
};

export default DetailFallback;
