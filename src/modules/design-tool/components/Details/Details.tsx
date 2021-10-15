import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
// components
import InputGroup from 'modules/core/components/InputGroup';
import Detail from 'modules/design-tool/components/Detail';
// state
import { imageDetailsState } from 'modules/design-tool/design-tool.state';
// styles
import { DetailsContainer, DetailsTitle } from './Details.styled';

const Details: FC = () => {
  const imageDetails = useRecoilValue(imageDetailsState);

  return (
    <DetailsContainer>
      <DetailsTitle>Details</DetailsTitle>
      <InputGroup>
        <Detail label="Author" value={imageDetails?.author || ''} />
        <Detail label="Original Image" value={imageDetails?.url || ''} />
      </InputGroup>
    </DetailsContainer>
  );
};

export default Details;
