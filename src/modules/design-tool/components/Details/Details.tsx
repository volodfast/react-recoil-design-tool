import React, { FC } from 'react';
// components
import InputGroup from 'modules/core/components/InputGroup';
import Detail from 'modules/design-tool/components/Detail';
// styles
import { DetailsContainer, DetailsTitle } from './Details.styled';

const Details: FC = () => {
  return (
    <DetailsContainer>
      <DetailsTitle>Details</DetailsTitle>
      <InputGroup>
        <Detail label="Author" value={''} />
        <Detail label="Original Image" value={''} />
      </InputGroup>
    </DetailsContainer>
  );
};

export default Details;
