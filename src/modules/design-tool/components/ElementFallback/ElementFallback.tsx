import React, { FC } from 'react';
// components
import Spinner from 'modules/core/components/Spinner';
// styles
import { ElementFallbackContainer } from './ElementFallback.styled';

const ElementFallback: FC = () => {
  return (
    <ElementFallbackContainer>
      <Spinner />
    </ElementFallbackContainer>
  );
};

export default ElementFallback;
