import React, { FC } from 'react';
// components
import InputGroup from 'modules/core/components/InputGroup';
import { DetailFallback } from 'modules/design-tool/components/Detail';
// styles
import { DetailsContainer, DetailsTitle } from './Details.styled';

const DetailsFallback: FC = () => {
  return (
    <DetailsContainer>
      <DetailsTitle>Details</DetailsTitle>
      <InputGroup>
        <DetailFallback label="Author" />
        <DetailFallback label="Original Image" />
      </InputGroup>
    </DetailsContainer>
  );
};

export default DetailsFallback;
